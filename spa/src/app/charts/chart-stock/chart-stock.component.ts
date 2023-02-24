import { MarketData } from 'src/app/models/market-data';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-stock',
  templateUrl: './chart-stock.component.html',
  styleUrls: ['./chart-stock.component.scss'],
})
export class ChartStockComponent implements OnInit {

  public title: string = "Stock Charts";

  public ticker: string = "";
  public startDate: string = "";
  public startDateLabel: string = "Select a start date"
  public endDate:string = "";
  public endDateLabel: string = "Select an end date"
  public period: string = "daily";
  public isLoading: boolean = false;

  private _marketData: MarketData[] = [];

  constructor(private repo: MarketDataService) { }

  ngOnInit() {
  }

  public get marketData(): MarketData[] {
    return this._marketData;
  }

  public getStock(): void {
    this.isLoading = true;
    this.repo.getYahooStockWithResult(this.ticker, this.startDate, this.endDate, this.period).subscribe(
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

  public get isFormValid(): boolean {
    return this.ticker === "" ||
    this.startDate === "" ||
    this.endDate === "";
  }
}
