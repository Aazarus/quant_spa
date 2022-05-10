import { Component, OnInit } from '@angular/core';
import Candle from 'src/app/models/candle';
import { CandleService } from 'src/app/services/candle.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent implements OnInit {

  public title: string = "Event Binding";

  public candle: Candle = {
    ticker: 'IBM',
    date: new Date('14/07/2015'),
    close: 168.61,
    high: 169.54,
    low: 168.24,
    open: 169.43
  };
  public bgColor: string = 'white';

  constructor(public candleService: CandleService) { }

  public ngOnInit(): void {}
}
