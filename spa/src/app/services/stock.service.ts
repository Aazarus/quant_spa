import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  public getStockColor(key: number): string {
    switch(key) {
      case 1:
        return 'red';
      case 2:
        return 'green';
      case 3:
        return 'blue';
      case 4:
        return 'maroon';
      case 5:
        return 'black';
      default:
        return 'pink';
    }
  }
}
