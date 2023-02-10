import { MarketQuote } from './../models/market-quote';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarketData } from 'src/app/models/market-data';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private _yahooStock: MarketData[] = [];
  private _iexStock: MarketData[] = [];
  private _iexQuote: MarketQuote;
  private _avStock: MarketData[] = [];
  private _avStockBar: MarketData[] = [];
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.baseUrl;
  }

  public get yahooStock(): MarketData[] {
    return this._yahooStock;
  }

  public get iexStock(): MarketData[] {
    return this._iexStock;
  }

  public get iexQuote(): MarketQuote {
    return this._iexQuote;
  }

  public get avStock(): MarketData[] {
    return this._avStock;
  }

  public get avStockBar(): MarketData[] {
    return this._avStockBar;
  }

  public getYahooStock(ticker: string, start: string, end: string, period: string): void  {
    const apiUrl = `${this.url}api/YahooStock/${ticker}/${start}/${end}/${period}`;
    this.httpClient.get<MarketData[]>(apiUrl).subscribe(
      result => this._yahooStock = result,
      error => console.log(error)
    );
  }

  public getYahooStockWithResult(ticker: string, start: string, end: string, period: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}api/YahooStock/${ticker}/${start}/${end}/${period}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getIexStock(ticker: string, range: string): void {
    const apiUrl = `${this.url}api/IexStock/${ticker}/${range}`;
    this.httpClient.get<MarketData[]>(apiUrl).subscribe(
      result => this._iexStock = result,
      error => console.log(error)
    );
  }

  public getIexStockWithResult(ticker: string, range: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}api/IexStock/${ticker}/${range}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getIexQuote(ticker: string): void {
    const apiUrl = `${this.url}api/IexQuote/${ticker}`;
    this.httpClient.get<MarketQuote>(apiUrl).subscribe(
      result => this._iexQuote = result,
      error => console.log(error)
    );
  }

  public getIexQuoteWithResult(ticker: string): Observable<MarketQuote> {
    const apiUrl = `${this.url}api/IexQuote/${ticker}`;
    return this.httpClient.get<MarketQuote>(apiUrl);
  }

  public getAvEODStock(ticker: string, start: string, end: string, period: string): void {
    const apiUrl = `${this.url}api/AvEOD/${ticker}/${start}/${end}/${period}`;
    this.httpClient.get<MarketData[]>(apiUrl).subscribe(
      result => this._avStock = result,
      error => console.log(error)
    );
  }

  public getAvEODStockWithResult(ticker: string, start: string, end: string, period: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}api/AvEOD/${ticker}/${start}/${end}/${period}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getAvStockBar(ticker: string, interval: string, outputSize: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}api/avbar/${ticker}/${interval}/${outputSize}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }
}
