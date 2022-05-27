import { Component, Input } from '@angular/core';
import { Symbol } from 'src/app/models/symbol';

@Component({
  selector: 'app-stock-price-child',
  templateUrl: './stock-price-child.component.html',
  styleUrls: ['./stock-price-child.component.scss'],
})
export class StockPriceChildComponent {

  @Input() stock: Symbol;
  public displayedCols =
    ['date', 'open', 'high', 'low', 'close', 'closeAdj', 'volume'];

  constructor() { }
}
