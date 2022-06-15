import { MarketDataService } from 'src/app/services/market-data.service';
import { Component } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';
import * as moment from 'moment';

@Component({
  selector: 'app-yahoo-stock',
  templateUrl: './yahoo-stock.component.html',
  styleUrls: ['./yahoo-stock.component.scss'],
})
export class YahooStockComponent {

  public title: string = "Yahoo Stock";
  public ticker: string = "A";
  public startDate: string;
  public startDateLabel: string = "Select a start date"
  public endDate:string;
  public endDateLabel: string = "Select an end date"
  public period: string = "daily";

  private _marketData: MarketData[] = [];

  constructor(private repository: MarketDataService) { }

  get marketData(): MarketData[] {
    return this._marketData;
  }

  public async getStock(): Promise<void> {    
    this.repository.getYahooStockWithResult(this.ticker, this.startDate, this.endDate, this.period)
    .subscribe(
      result => this._marketData = result,
      error => console.log("Received an error", error)
    );
  }

  public startDateSelected(event: string): void {
    this.startDate = event
  }
  
  public endDateSelected(event: string): void {
    this.endDate = event
  }
}
