import { Component, Input } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';

@Component({
  selector: 'app-yahoo-stock-table',
  templateUrl: './yahoo-stock-table.component.html',
  styleUrls: ['./yahoo-stock-table.component.scss'],
})
export class YahooStockTableComponent {

  @Input() marketData: MarketData[] = [];
  
  public displayedCols: string[] = ['date', 'open', 'high', 'low', 'close', 'closeAdj', 'volume'];

  constructor() { }
}
