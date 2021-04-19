import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsService } from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class FxqService extends UrlsService {
  
  constructor(private http: HttpClient) {
    super();
  }

  FXQURL = this.baseURL + 'FXQ';

  getAll(): Observable<any> {
    return this.http.get( this.FXQURL + '/list' );
  }

  getById(id: number): Observable<any> {
    return this.http.get( this.FXQURL + '/id/' + id );
  }

  getBySymbol(symbol: string): Observable<any> {
    return this.http.get( this.FXQURL + '/symbol/' + symbol );
  }

  getBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( this.FXQURL + '/symbol/' + symbol + '/tenor/' + tenor );
  }

  newAll(): Observable<any> {
    return this.http.get( this.FXQURL + '/slist');
  }

  newBySymbol(symbol: string): Observable<any> {
    return this.http.get( this.FXQURL + '/ssymbol/' + symbol );
  }

  newBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( this.FXQURL + '/ssymbol/' + symbol + '/tenor/' + tenor );
  }

  getRecent(symbol: string, tenor: string): Observable<any> {
    return this.http.get( this.FXQURL + '/recent/' + symbol + '/' + tenor);
  }

}
