import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndexData } from 'src/app/models/index-data';
import { Price } from 'src/app/models/price';
import { Symbol } from 'src/app/models/symbol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private _stock: Symbol = null;
  private _stocks: Symbol[] = [];
  private _stockWithTicker: Symbol = null;
  private _prices: Price[] = [];
  private _indexData: IndexData[] = [];
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.baseUrl;
    this.getStocks();
    this.getIndexDataPeriod("2005-01-01", "2005-03-01");
    this.getStock(1);
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
    this.httpClient.get<Symbol[]>(this.url + 'api/stocks')
      .subscribe(
        result => this._stocks = result,
        error => console.log("Received an error", error));
  }

  public getStock(id: number): void {
    this.httpClient.get<Symbol>(this.url + `api/stocks/${id}`)
      .subscribe(
        result => this._stock = result,
        error => console.log("Received an error", error));
  }

  public getStockWithResult(id: number): Observable<Object> {
    return this.httpClient.get<Symbol>(this.url + `api/stocks/${id}`);
  }

  public getStockWithTicker(ticker: string): void {
    this.httpClient.get<Symbol>(this.url + `api/stocks/with-ticker/${ticker}`)
      .subscribe(
        result => this._stockWithTicker = result,
        error => console.log("Received an error", error));
  }

  public getStockAndPriceWithTicker(ticker: string, start: string, end: string): void {
    this.httpClient.get<Symbol>(this.url + `api/stocks/and-prices-with-ticker/${ticker}/${start}/${end}`)
      .subscribe(
        result => this._stockWithTicker = result,
        error => console.log("Received an error", error));
  }

  public getStockAndPrice(id: number, start: string, end: string): void {
    this.httpClient.get<Symbol>(this.url + `api/stocks/${id}/${start}/${end}`)
      .subscribe(
        result => this._stock = result,
        error => console.log("Received an error", error));
  }

  public getIndexData(): void {
    this.httpClient.get<IndexData[]>(this.url + `api/stocks/index-data`)
      .subscribe(
        result => this._indexData = result,
        error => console.log("Received an error", error));
  }
  
  public getIndexDataPeriod(start: string, end: string): void {
    this.httpClient.get<IndexData[]>(this.url + `api/stocks/index-data/${start}/${end}`)
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
    this.httpClient.post<number>(this.url + `api/stocks`, newStock).subscribe(
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
    this.httpClient.put(this.url + `api/stocks/${stock.symbolId}`, newStock).subscribe(
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
    this.httpClient.delete(this.url + `api/stocks/${id}`).subscribe(
      _ => this.getStocks(),
      error => console.log("Received an error", error));
  }

  public deleteStockWithResult(id: number): Observable<object> {
    return this.httpClient.delete(this.url + `api/stocks/${id}`);
  }
}
