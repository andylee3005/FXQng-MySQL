import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { StockService } from '../../services/stock.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Portfolio } from 'src/app/entity/Portfolio';
import { Stock } from '../../entity/Stock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'currency', 'volume', 'price', 'stockTime']; //, 'currPrice'
  
  isLoggedIn = false;
  cid: string;

  stockList: Stock[] = [];

  stocks: any;
  currentStock = null;
  currentIndex = -1;

  @Output() stockSelected = new EventEmitter();

  constructor(
    private stockService: StockService,
    private tokenStorageServices: TokenStorageService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageServices.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageServices.getUser();
      this.cid = user.id;
    }
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getByCid(this.cid).subscribe( 
      data => {
        this.stocks = data;
        this.stockList = this.stocks;
        console.log(this.stocks);
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.getStocks();
    this.currentStock = null;
    this.currentIndex = -1;
  }

  setActiveStock(stock): void {
    this.currentStock = stock;
    // console.log(this.currentStock);
    this.stockSelected.emit(this.currentStock);
  }

  deleteStock(stock, index): void {
    this.stockService.delete(this.currentStock.id).subscribe(
      response => {
        console.log(response);
        this.refreshList();
      }, error => {
        console.log(error);
      });
  }
}
