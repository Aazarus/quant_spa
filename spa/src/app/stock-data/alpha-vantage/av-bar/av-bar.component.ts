import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-bar',
  templateUrl: './av-bar.component.html',
  styleUrls: ['./av-bar.component.scss'],
})
export class AvBarComponent implements OnInit {

  public title: string = "AlphaVantage Bar";

  constructor() { }

  ngOnInit() {}

}
