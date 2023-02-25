import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';
import { MarketDataService } from 'src/app/services/market-data.service';

@Component({
  selector: 'app-av-stock',
  templateUrl: './av-stock.component.html',
  styleUrls: ['./av-stock.component.scss'],
})
export class AvStockComponent implements OnDestroy {

  public title = "AlphaVantage Stock";

  public ticker: string = "";
  public startDate: string = "";
  public startDateLabel: string = "Select a start date"
  public endDate:string;
  public endDateLabel: string = "Select an end date"
  public period: string = "daily";
  public isLoading: boolean = false;
  public displayCols: string[] = ["date", "open", "high", "low", "close", "closeAdj", "volume"];

  private _marketData: MarketData[] = [];

  private avEodStockSub: Subscription;

  constructor(private marketRepo: MarketDataService) { }

  ngOnDestroy(): void {
      if (this.avEodStockSub) {
        this.avEodStockSub.unsubscribe();
      }
  }

  public get stock(): MarketData[] {
    return this._marketData;
  }

  public getStock(): void {
    this.isLoading = true;
    this.avEodStockSub = this.marketRepo.getAvEODStockWithResult(this.ticker, this.startDate, this.endDate, this.period).subscribe(
      result => {
        this._marketData = result;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  public startDateSelected(event: string): void {
    this.startDate = event
  }

  public endDateSelected(event: string): void {
    this.endDate = event
  }
}
