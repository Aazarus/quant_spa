import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarketData } from './../models/market-data';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private _yahooStock: MarketData[] = [];
  private url: string;
  
  constructor(private httpClient: HttpClient) { 
    this.url = environment.baseUrl;
  }

  public get yahooStock(): MarketData[] {
    return this._yahooStock;
  }

  public getYahooStock(ticker: string, start: string, end: string, period: string): void  {
    const apiUrl = `${this.url}api/YahooStock/${ticker}/${start}/${end}/${period}`;
    this.httpClient.get<MarketData[]>(apiUrl).subscribe(result => this._yahooStock = result);
  }

  public getYahooStockWithResult(ticker: string, start: string, end: string, period: string): Observable<Object> {
    const apiUrl = `${this.url}api/YahooStock/${ticker}/${start}/${end}/${period}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }
}
