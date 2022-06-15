import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import Stock, { defaultStocks } from 'src/app/models/stock';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss'],
})
export class DirectiveTestComponent implements OnInit {

  public title: string = "Directive Test";
  public stocks: Stock[];

  constructor(public stockService: StockService) { }

  ngOnInit() {
    this.stocks = defaultStocks();
  }

  getStock(id: number): Stock {
    return this.stocks.find(s => s.id === id);
  }
}
