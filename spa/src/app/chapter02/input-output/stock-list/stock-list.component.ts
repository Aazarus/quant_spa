import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Stock, { defaultStocks } from 'src/app/models/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {

  public stocks: Stock[];
  @Output() selected = new EventEmitter<Stock>();

  constructor() { }

  public ngOnInit(): void {
    this.stocks = defaultStocks();
  }

  public stockSelected(stock: Stock): void {
    this.selected.emit(stock);
  }
}
