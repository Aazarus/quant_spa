import { Component, OnInit } from '@angular/core';
import Candle from 'src/app/models/candle';
import { CandleService } from 'src/app/services/candle.service';

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

  constructor(public candleService: CandleService) { }

  public ngOnInit(): void {}
}
