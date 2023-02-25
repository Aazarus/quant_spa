import { Subscription } from 'rxjs';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnDestroy } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';

@Component({
  selector: 'app-yahoo-stock',
  templateUrl: './yahoo-stock.component.html',
  styleUrls: ['./yahoo-stock.component.scss'],
})
export class YahooStockComponent implements OnDestroy {

  public title: string = "Yahoo Stock";
  public ticker: string = "";
  public startDate: string;
  public startDateLabel: string = "Select a start date"
  public endDate:string;
  public endDateLabel: string = "Select an end date"
  public period: string = "daily";

  private _marketData: MarketData[] = [];

  private yahooStockSub: Subscription;

  constructor(private marketRepo: MarketDataService) { }

  ngOnDestroy(): void {
    if (!!this.yahooStockSub) {
      this.yahooStockSub.unsubscribe();
    }
  }

  public get marketData(): MarketData[] {
    return this._marketData;
  }

  public async getStock(): Promise<void> {
    this.yahooStockSub = this.marketRepo.getYahooStockWithResult(this.ticker, this.startDate, this.endDate, this.period)
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
