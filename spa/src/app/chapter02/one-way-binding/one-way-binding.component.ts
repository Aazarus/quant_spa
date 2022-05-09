import { Component, OnInit } from '@angular/core';
import Candle from 'src/app/models/candle';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss'],
})
export class OneWayBindingComponent implements OnInit {

  title: string = 'One Way Binding';

  public candle: Candle = {
    ticker: 'IBM',
    date: new Date('07/14/2015'),
    close: 168.61,
    high: 169.54,
    low: 168.24,
    open: 169.43
  };

  constructor() { }

  public ngOnInit(): void {}

  public getColor(price: number): string {
    return price < 169 ? 'red' : 'green';
  }

  public avgPrice(candle: Candle): number {
    return (candle.close + candle.high + candle.low + candle.open)/4;
  }
}
