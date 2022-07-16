import { MarketData } from 'src/app/models/market-data';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iex-stock',
  templateUrl: './iex-stock.component.html',
  styleUrls: ['./iex-stock.component.scss'],
})
export class IexStockComponent {

  public title: string = "IEX Stock";
  public ticker: string = "IBM";
  public range: string = "One Month";
  public isLoading: boolean = false;

  private _marketData: MarketData[] = [];

  public displayedCols: string[] = ['date', 'open', 'high', 'low', 'close', 'volume'];

  constructor(private marketRepo: MarketDataService) { }

  public get stock(): MarketData[] {
    return this._marketData;
  }

  public getStock(): void {
    this.isLoading = true;
    this.marketRepo.getIexStockWithResult(this.ticker, this.range).subscribe(
      result => {
        this._marketData = result;
        this.isLoading = false;
      },
      error => console.log(error)
    );
  }
}
