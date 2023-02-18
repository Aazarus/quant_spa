import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-fx-bar',
  templateUrl: './av-fx-bar.component.html',
  styleUrls: ['./av-fx-bar.component.scss'],
})
export class AvFxBarComponent implements OnInit {

  public title: string = "AlphaVantage FX Bar";

  constructor() { }

  ngOnInit() {}

}
