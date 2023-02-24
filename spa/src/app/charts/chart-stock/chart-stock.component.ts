import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-stock',
  templateUrl: './chart-stock.component.html',
  styleUrls: ['./chart-stock.component.scss'],
})
export class ChartStockComponent implements OnInit {

  public title: string = "Stock Charts";

  constructor() { }

  ngOnInit() {}

}
