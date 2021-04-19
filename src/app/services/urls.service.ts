import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }
  baseURL = "http://localhost:4980/";
  
}
