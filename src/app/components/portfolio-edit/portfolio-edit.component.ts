import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { StockService } from '../../services/stock.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Portfolio } from 'src/app/entity/Portfolio';
import { Stock } from '../../entity/Stock';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioListComponent } from '../portfolio-list/portfolio-list.component';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.css']
})
export class PortfolioEditComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'currency', 'price', 'volume', 'stockTime'];
  
  isLoggedIn = false;
  pid: string;
  port: Portfolio;

  stocks: any;

  volumeToBuy: number;
  volumeToSell: number;
  stockVolControl;
  stockSelected = null;
  
  // @ViewChild(StockSpotComponent) stockSpotComponent: StockSpotComponent;
  toAdd;
  toRemove;

  constructor(
    private portfolioService: PortfolioService, 
    private stockService: StockService,
    private tokenStorageServices: TokenStorageService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('id');
    // console.log(this.pid);
    // this.isLoggedIn = !!this.tokenStorageServices.getToken();

    this.getStocks();
    console.log(this.port);
    // this.getCurrentPrice();
    this.toAdd = null;
    this.toRemove = null;
  }

  getStocks(): void {
    this.portfolioService.getById(this.pid).subscribe( 
      data => {
        this.port = data;
        console.log(data);
        this.stocks = this.portfolioService.getStocks(data.id);
        console.log(this.stocks);
        this.getCurrentPrice();
      }, error => {
        console.log(error);
      });
  }

  getCurrentPrice(): void {
    this.stocks.forEach(s => {
      this.stockService.getMostRecent(s.symbol).subscribe(
        data => {
          s.currPrice = data.px;
          // console.log("Most recent stock price: " + data.price);
        }, error => {
          console.log(error);
        }
      );
    });
  }

  addStock(): void {
    console.log(this.port);
    this.portfolioService.addRel(this.toAdd.id, this.port).subscribe(
      response => {
        console.log(response);
        this.getStocks();
      }, error => {
        console.log(error);
      }
    );
    console.log("Stock added");
  }

  removeStock(): void {
    this.portfolioService.delRel(this.toRemove.id, this.port).subscribe(
      response => {
        console.log(response);
        this.getStocks();
      }, error => {
        console.log(error);
      }
    );
    console.log("Stock removed");
    
  }

  updatePortfolio(): void {
    
    this.portfolioService.edit(this.pid, this.port).subscribe(
      response => {
        console.log(response);
        this.getStocks();
      }, error => {
        console.log(error);
      }
    );
  }

  onAddClicked(row) {
    this.toAdd = row;
    console.log(this.toAdd);
  }
  
  onRemoveClicked(row) {
    this.toRemove = row;
    console.log(this.toRemove);
  }
}
