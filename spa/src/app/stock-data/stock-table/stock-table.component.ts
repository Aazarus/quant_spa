import { Component, Input, OnInit } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';

@Component({
  selector: 'app-yahoo-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
})
export class StockTableComponent implements OnInit {

  @Input() marketData: MarketData[] = [];
  @Input() includeCloseAdj: boolean = true;
  
  public displayedCols: string[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.includeCloseAdj) {
      this.displayedCols = ['date', 'open', 'high', 'low', 'close', 'closeAdj', 'volume'];
    } else{
      this.displayedCols = ['date', 'open', 'high', 'low', 'close', 'volume'];
    }
  }
}
