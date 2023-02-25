import { MarketQuote } from 'src/app/models/market-quote';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarketData } from 'src/app/models/market-data';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AvQuote } from 'src/app/models/av-quote';
import { FxData } from 'src/app/models/fx-data';
import { AvSectorPerf } from '../models/av-sector-perf';
import { QuandlStockData } from '../models/quandl-stock-data';
import { IsdaRateData } from '../models/IsdaRateData';
import { OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService implements OnDestroy {

  private _yahooStock: MarketData[] = [];
  private _iexStock: MarketData[] = [];
  private _iexQuote: MarketQuote;
  private _avStock: MarketData[] = [];
  private _avStockBar: MarketData[] = [];
  private url: string;

  // Subscriptions
  private yahooStockSub: Subscription;
  private iexStockSub: Subscription;
  private iexQuoteSub: Subscription;
  private avEODStockSub: Subscription;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.baseUrl}api/`;
  }

  ngOnDestroy(): void {

    if (!!this.yahooStockSub) {
      this.yahooStockSub.unsubscribe();
    }

    if (!!this.iexStockSub) {
      this.iexStockSub.unsubscribe();
    }

    if (!!this.iexQuoteSub) {
      this.iexQuoteSub.unsubscribe();
    }

    if (!!this.avEODStockSub) {
      this.avEODStockSub.unsubscribe();
    }

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
    const apiUrl = `${this.url}YahooStock/${ticker}/${start}/${end}/${period}`;
    this.yahooStockSub = this.httpClient.get<MarketData[]>(apiUrl).subscribe(
      result => this._yahooStock = result,
      error => console.log(error)
    );
  }

  public getYahooStockWithResult(ticker: string, start: string, end: string, period: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}YahooStock/${ticker}/${start}/${end}/${period}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getIexStock(ticker: string, range: string): void {
    const apiUrl = `${this.url}IexStock/${ticker}/${range}`;
    this.iexStockSub = this.httpClient.get<MarketData[]>(apiUrl).subscribe(
      result => this._iexStock = result,
      error => console.log(error)
    );
  }

  public getIexStockWithResult(ticker: string, range: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}IexStock/${ticker}/${range}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getIexQuote(ticker: string): void {
    const apiUrl = `${this.url}IexQuote/${ticker}`;
    this.iexQuoteSub = this.httpClient.get<MarketQuote>(apiUrl).subscribe(
      result => this._iexQuote = result,
      error => console.log(error)
    );
  }

  public getIexQuoteWithResult(ticker: string): Observable<MarketQuote> {
    const apiUrl = `${this.url}IexQuote/${ticker}`;
    return this.httpClient.get<MarketQuote>(apiUrl);
  }

  public getAvEODStock(ticker: string, start: string, end: string, period: string): void {
    const apiUrl = `${this.url}AvEOD/${ticker}/${start}/${end}/${period}`;
    this.avEODStockSub = this.httpClient.get<MarketData[]>(apiUrl).subscribe(
      result => this._avStock = result,
      error => console.log(error)
    );
  }

  public getAvEODStockWithResult(ticker: string, start: string, end: string, period: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}AvEOD/${ticker}/${start}/${end}/${period}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getAvStockBar(ticker: string, interval: string, outputSize: string): Observable<MarketData[]> {
    const apiUrl = `${this.url}avbar/${ticker}/${interval}/${outputSize}`;
    return this.httpClient.get<MarketData[]>(apiUrl);
  }

  public getAvQuote(ticker: string): Observable<AvQuote> {
    const apiUrl = `${this.url}avquote/${ticker}`;
    return this.httpClient.get<AvQuote>(apiUrl);
  }

  public getAvFx(ticker: string, start: string, period: string): Observable<FxData[]> {
    const apiUrl = `${this.url}avfxeod/${ticker}/${start}/${period}`;
    return this.httpClient.get<FxData[]>(apiUrl);
  }

  public getAvFxBar(ticker: string, interval: string, outputSize: string): Observable<FxData[]> {
    const apiUrl = `${this.url}avfxbar/${ticker}/${interval}/${outputSize}`;
    return this.httpClient.get<FxData[]>(apiUrl);
  }

  public getAvSectorPerformance(): Observable<AvSectorPerf[]> {
    const apiUrl = `${this.url}avsector/perf`;
    return this.httpClient.get<AvSectorPerf[]>(apiUrl);
  }

  public getQuandlStock(ticker: string, start: string, end: string): Observable<QuandlStockData[]> {
    const apiUrl = `${this.url}QuandlStock/${ticker}/${start}/${end}`;
    return this.httpClient.get<QuandlStockData[]>(apiUrl);
  }

  public getIsdaRate(currency: string, date: string): Observable<IsdaRateData[]> {
    const apiUrl = `${this.url}IsdaRate/${currency}/${date}`;
    return this.httpClient.get<IsdaRateData[]>(apiUrl);
  }
}
