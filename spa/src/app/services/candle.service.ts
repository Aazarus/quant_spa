import { Injectable } from '@angular/core';
import Candle from '../models/candle';

@Injectable({
  providedIn: 'root'
})
export class CandleService {

  constructor() { }  

  public getColor(price: number): string {
    return price < 169 ? 'red' : 'green';
  }

  public avgPrice(candle: Candle): number {
    return (candle.close + candle.high + candle.low + candle.open)/4;
  }
}
