import { MarketData } from 'src/app/models/market-data';
import { QuandlStockData } from './../../../models/quandl-stock-data';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quandl-stock',
  templateUrl: './quandl-stock.component.html',
  styleUrls: ['./quandl-stock.component.scss'],
})
export class QuandlStockComponent implements OnInit {

  public title: string = "Quandl Stock";
  public tableTicker: string = "";
  public ticker: string = "";
  public startDate: string = "";
  public startDateLabel: string = "Select a start date";
  public endDate: string = "";
  public endDateLabel: string = "Select an end date";
  public isLoading: boolean = false;
  private _marketData: QuandlStockData[] = [];

  public displayedCols: string[] = [
    'date', 'open', 'high', 'low','close', 'volume', 'openAdj', 'highAdj', 'lowAdj', 'closeAdj', 'volumeAdj'
  ];

  constructor(private repo: MarketDataService) { }

  ngOnInit() {}

  public get marketData(): MarketData[] {
    return this._marketData;
  }

  public get isFormInvalid(): boolean {
    return this.ticker === "" ||
      this.startDate === "" ||
      this.endDate === "";
  }

  public startDateSelected(event: string): void {
    this.startDate = event
  }

  public endDateSelected(event: string): void {
    this.endDate = event
  }

  public async getQuandlStock():  Promise<void> {
    this.isLoading = true;
    this.tableTicker = "";
    this.repo.getQuandlStock(this.ticker, this.startDate, this.endDate).subscribe(
      result => {
        this.tableTicker = this.ticker;
        this.isLoading = false;
        this._marketData = result;
      },
      error => {
        this.isLoading = false;
        console.error(error);
      }
    )
  }
}
