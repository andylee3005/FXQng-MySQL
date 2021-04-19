import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Stock } from 'src/app/entity/Stock';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  _cid: number;
  _symbol: string = "";
  _currency: string = "";
  _volume: number;
  _price: number;

  username;

  toMod = null;
  
  constructor(
    private stockService: StockService,
    private tokenStorageServices: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this._cid = this.tokenStorageServices.getUser().id;
    console.log(this._cid);
  }

  onSelectClicked(row) {
    this.toMod = row;
    console.log(this.toMod);
  }

  createStock() {
    let _stock = new Stock(this._cid, this._symbol, this._currency, this._volume, this._price);
    this.stockService.create(_stock).subscribe(
      response => {
        console.log(response);
        this.reloadCurrentRoute();
      }, error => {
        console.log(error);
      }
    );
    console.log("created");
  }

  modifyStock() {
    this.stockService.update(this.toMod.id, this.toMod).subscribe(
      response => {
        console.log(response);
        this.reloadCurrentRoute();
      }, error => {
        console.log(error);
      }
    );
    console.log("modified");
  }

  deleteStock() {
    this.stockService.delete(this.toMod.id).subscribe(
      response => {
        console.log(response);
        this.reloadCurrentRoute();
      }, error => {
        console.log(error);
      }
    );
    console.log("deleted");
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
