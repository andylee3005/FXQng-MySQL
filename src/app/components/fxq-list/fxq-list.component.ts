import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FxqService } from '../../services/fxq.service';
import { from, Subject } from 'rxjs';
import { FXQuote } from '../../entity/FXQuote';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-fxq-list',
  templateUrl: './fxq-list.component.html',
  styleUrls: ['./fxq-list.component.css']
})
export class FxqListComponent implements OnInit, OnDestroy {


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  quotes: FXQuote[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['symbol', 'tenor', 'price', 'quoteTime'];
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: FxqService, private token: TokenStorageService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe( 
      ( data: any[]) => {
      console.log( data);
      this.quotes = data;
      this.dataSource = new MatTableDataSource(this.quotes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
