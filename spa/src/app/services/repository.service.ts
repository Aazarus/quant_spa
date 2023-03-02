import { MarketData } from 'src/app/models/market-data';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IndexData } from 'src/app/models/index-data';
import { Price } from 'src/app/models/price';
import { Symbol } from 'src/app/models/symbol';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService implements OnDestroy {

  private _stock: Symbol = null;
  private _stocks: Symbol[] = [];
  private _stockWithTicker: Symbol = null;
  private _prices: Price[] = [];
  private _indexData: IndexData[] = [];
  private url: string;


  // Subscriptions
  private stocksSub: Subscription;
  private getStockSub: Subscription;
  private stockWithTickerSub: Subscription;
  private stockAndPriceWithTickerSub: Subscription;
  private stockAndPriceSub: Subscription;
  private indexDataSub: Subscription;
  private indexDataPeriodSub: Subscription;
  private createStockSub: Subscription;
  private updateStockSub: Subscription;
  private deleteStockSub: Subscription;

  constructor(private httpClient: HttpClient) {
    this.url = environment.baseUrl;
    this.getStocks();
    this.getIndexDataPeriod("2005-01-01", "2005-03-01");
  }

  ngOnDestroy(): void {

    if (!!this.stocksSub) {
      this.stocksSub.unsubscribe();
    }

    if (!!this.getStockSub) {
      this.getStockSub.unsubscribe();
    }

    if (!!this.stockWithTickerSub) {
      this.stockWithTickerSub.unsubscribe();
    }

    if (!!this.stockAndPriceWithTickerSub) {
      this.stockAndPriceWithTickerSub.unsubscribe();
    }

    if (!!this.stockAndPriceSub) {
      this.stockAndPriceSub.unsubscribe();
    }

    if (!!this.indexDataSub) {
      this.indexDataSub.unsubscribe();
    }

    if (!!this.indexDataPeriodSub) {
      this.indexDataPeriodSub.unsubscribe();
    }

    if (!!this.createStockSub) {
      this.createStockSub.unsubscribe();
    }

    if (!!this.updateStockSub) {
      this.updateStockSub.unsubscribe();
    }

    if (!!this.deleteStockSub) {
      this.deleteStockSub.unsubscribe();
    }
  }

  public get stocks(): Symbol[] {
    return this._stocks;
  }

  public get stock(): Symbol {
    return this._stock;
  }

  public get stockWithTicker(): Symbol {
    return this._stockWithTicker;
  }

  public get prices(): Price[] {
    return this._prices;
  }

  public get indexData(): IndexData[] {
    return this._indexData;
  }

  public getStocks(): void {
    this.stocksSub = this.httpClient.get<Symbol[]>(this.url + 'api/stocks')
      .subscribe(
        result => this._stocks = result,
        error => console.log("Received an error", error));
  }

  public getStock(id: number): void {
    this.getStockSub = this.httpClient.get<Symbol>(this.url + `api/stocks/${id}`)
      .subscribe(
        result => this._stock = result,
        error => console.log("Received an error", error));
  }

  public getStockWithResult(id: number): Observable<Object> {
    return this.httpClient.get<Symbol>(this.url + `api/stocks/${id}`);
  }

  public getStockWithTicker(ticker: string): void {
    this.stockWithTickerSub = this.httpClient.get<Symbol>(this.url + `api/stocks/with-ticker/${ticker}`)
      .subscribe(
        result => this._stockWithTicker = result,
        error => console.log("Received an error", error));
  }

  public getStockAndPriceWithTicker(ticker: string, start: string, end: string): void {
    this.stockAndPriceWithTickerSub = this.httpClient.get<Symbol>(`${this.url}api/stocks/and-prices-with-ticker/${ticker}/${start}/${end}`)
      .subscribe(
        result => this._stockWithTicker = result,
        error => console.log("Received an error", error));
  }

  public getStockAndPrice(id: number, start: string, end: string): void {
    this.stockAndPriceSub = this.httpClient.get<Symbol>(this.url + `api/stocks/${id}/${start}/${end}`)
      .subscribe(
        result => this._stock = result,
        error => console.log("Received an error", error));
  }

  public getIndexData(): void {
    this.indexDataSub = this.httpClient.get<IndexData[]>(this.url + `api/stocks/index-data`)
      .subscribe(
        result => this._indexData = result,
        error => console.log("Received an error", error));
  }

  public getIndexDataPeriod(start: string, end: string): void {
    this.indexDataPeriodSub = this.httpClient.get<IndexData[]>(this.url + `api/stocks/index-data/${start}/${end}`)
      .subscribe(
        result => this._indexData = result,
        error => console.log("Received an error", error));
  }

  public createStock(stock: Symbol): Symbol {
    let newStock: Symbol = {
      ticker: stock.ticker,
      region: stock.region,
      sector: stock.sector
    };
    this.createStockSub = this.httpClient.post<number>(this.url + `api/stocks`, newStock).subscribe(
      result => {
        stock.symbolId = result;
        this._stocks.push(stock);
      },
      error => console.log("Received an error", error));

      return stock;
  }

  public updateStock(stock: Symbol): void {
    let newStock: Symbol = {
      symbolId: stock.symbolId,
      ticker: stock.ticker,
      region: stock.region,
      sector: stock.sector
    };
    this.updateStockSub = this.httpClient.put(this.url + `api/stocks/${stock.symbolId}`, newStock).subscribe(
      _ => this.getStocks(),
      error => console.log("Received an error", error));
  }

  public updateStockWithResult(stock: Symbol): Observable<Object> {
    let newStock: Symbol = {
      symbolId: stock.symbolId,
      ticker: stock.ticker,
      region: stock.region,
      sector: stock.sector
    };
    return this.httpClient.put(this.url + `api/stocks/${stock.symbolId}`, newStock);
  }

  public deleteStock(id: number): void {
    this.deleteStockSub = this.httpClient.delete(this.url + `api/stocks/${id}`).subscribe(
      _ => this.getStocks(),
      error => console.log("Received an error", error));
  }

  public deleteStockWithResult(id: number): Observable<object> {
    return this.httpClient.delete(this.url + `api/stocks/${id}`);
  }

  public addStockPriceWithResult(stockData: MarketData[]): Observable<Object> {
    return this.httpClient.post<MarketData[]>(`${this.url}api/stocks/add-stock-price`, stockData);
  }
}
