import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quandl-stock',
  templateUrl: './quandl-stock.component.html',
  styleUrls: ['./quandl-stock.component.scss'],
})
export class QuandlStockComponent implements OnInit {

  public title: string = "Quandl Stock";

  constructor() { }

  ngOnInit() {}

}
