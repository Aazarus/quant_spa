import { CandleService } from './../../services/candle.service';
import { Component, OnInit } from '@angular/core';
import Candle from 'src/app/models/candle';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit {

  public title: string = 'Interpolation';
  public candles: Candle[] = [
    {
      ticker: 'IBM',
      date: new Date('07/14/2015'),
      close: 168.61,
      high: 169.54,
      low: 168.24,
      open: 169.43
    },
    {
      ticker: 'AAP',
      date: new Date('07/14/2015'),
      close: 167.61,
      high: 169.74,
      low: 167.24,
      open: 169.03
    },
  ];
  public displayedColumns = ['ticker', 'date', 'open', 'high', 'low', 'close', 'avg'];

  constructor(public candleService: CandleService) { }

  public ngOnInit(): void {}
}
