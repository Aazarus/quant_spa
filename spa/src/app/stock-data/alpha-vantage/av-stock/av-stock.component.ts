import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-stock',
  templateUrl: './av-stock.component.html',
  styleUrls: ['./av-stock.component.scss'],
})
export class AvStockComponent implements OnInit {

  public title = "AlphaVantage Stock";

  constructor() { }

  ngOnInit() {}

}
