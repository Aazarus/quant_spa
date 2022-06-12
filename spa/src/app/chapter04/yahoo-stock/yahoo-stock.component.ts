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
  public startDate: string = '2018-01-01';
  public endDate:string = '2018-11-01';
  public period: string = "daily";

  private _marketData: MarketData[] = [];

  constructor(private repository: MarketDataService) { }

  get marketData(): MarketData[] {
    return this._marketData;
  }

  public async getStock(): Promise<void> {
    // ToDo: Temporary fix to get the date in the correct format.
    // ToDo: Add new Component for handling date.
    const start = moment(this.startDate).format("YYYY-MM-DD");
    const end = moment(this.endDate).format("YYYY-MM-DD");
    
    this.repository.getYahooStockWithResult(this.ticker, start, end, this.period)
    .subscribe(
      result => this._marketData = result,
      error => console.log("Received an error", error)
    );
  }
}
