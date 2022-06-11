import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yahoo-stock',
  templateUrl: './yahoo-stock.component.html',
  styleUrls: ['./yahoo-stock.component.scss'],
})
export class YahooStockComponent implements OnInit {

  public title: string = "Yahoo Stock";

  constructor() { }

  ngOnInit() {}

}
