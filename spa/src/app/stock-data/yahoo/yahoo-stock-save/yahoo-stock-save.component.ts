import { RepositoryService } from 'src/app/services/repository.service';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';

@Component({
  selector: 'app-yahoo-stock-save',
  templateUrl: './yahoo-stock-save.component.html',
  styleUrls: ['./yahoo-stock-save.component.scss'],
})
export class YahooStockSaveComponent {

  public title: string = "Yahoo Stock Save";

  public ticker: string = "";
  public startDate: string;
  public startDateLabel: string = "Select a start date"
  public endDate:string;
  public endDateLabel: string = "Select an end date"
  public period: string = "daily";
  public isSaved: boolean = false;
  
  private _marketData: MarketData[] = [];

  constructor(
    private marketRepo: MarketDataService, 
    private repo: RepositoryService) { }

  public get marketData(): MarketData[] {
    return this._marketData;
  }

  public async getStock(): Promise<void> {    
    this.marketRepo.getYahooStockWithResult(this.ticker, this.startDate, this.endDate, this.period)
    .subscribe(
      result => this._marketData = result,
      error => console.log("Received an error", error)
    );
  }

  public async saveStock(): Promise<void> {
    this.repo.addStockPriceWithResult(this._marketData).subscribe(
      _ => this.isSaved = true,
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
