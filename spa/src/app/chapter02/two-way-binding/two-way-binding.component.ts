import { CandleService } from 'src/app/services/candle.service';
import { Component, OnInit } from '@angular/core';
import Candle from 'src/app/models/candle';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {

  public title: string = "Two Way Binding";

  public candle: Candle = {
    ticker: 'IBM',
    date: new Date('07/14/2015'),
    close: 168.61,
    high: 169.54,
    low: 168.24,
    open: 169.43
  };

  constructor(public candleService: CandleService) { }

  ngOnInit() {}

}
