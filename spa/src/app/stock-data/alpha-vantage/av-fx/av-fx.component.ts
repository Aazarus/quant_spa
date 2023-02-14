import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-fx',
  templateUrl: './av-fx.component.html',
  styleUrls: ['./av-fx.component.scss'],
})
export class AvFxComponent implements OnInit {

  public title: string = "AlphaVantage FX EoD";

  constructor() { }

  ngOnInit() {}

}
