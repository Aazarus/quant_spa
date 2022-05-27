import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-data',
  templateUrl: './index-data.component.html',
  styleUrls: ['./index-data.component.scss'],
})
export class IndexDataComponent implements OnInit {

  public title: string = "Index Data";

  constructor() { }

  ngOnInit() {}

}
