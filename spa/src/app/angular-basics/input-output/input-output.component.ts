import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/models/stock';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {

  public title: string = 'Input Output';
  public selectedStock: Stock = null;

  constructor() { }

  public showStockDetails(stock: Stock): void {
    this.selectedStock = stock;
  }
}
