import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';

@Component({
  selector: 'app-av-bar',
  templateUrl: './av-bar.component.html',
  styleUrls: ['./av-bar.component.scss'],
})
export class AvBarComponent implements OnInit {

  public title: string = "AlphaVantage Bar";
  public ticker: string = "A";
  public interval: string = "5";
  public outputSize: string = "1";
  public isLoading: boolean = false;

  private _marketData: MarketData[] = [];

  public displayedCols: string[] = ['date', 'open', 'high', 'low', 'close', 'volume'];

  constructor(private marketRepo: MarketDataService) { }

  ngOnInit() {
    this.getBar();
  }

  public get stock(): MarketData[] {
    return this._marketData;
  }

  public getBar() {
    this.marketRepo.getAvStockBar(this.ticker, this.interval, this.outputSize).subscribe(
      result => {
        this._marketData = result;
        this.isLoading = false;
      },
      error => console.log(error)
    );
  }
}
