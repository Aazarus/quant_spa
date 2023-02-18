import { FxData } from 'src/app/models/fx-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-table',
  templateUrl: './fx-table.component.html',
  styleUrls: ['./fx-table.component.scss'],
})
export class FxTableComponent implements OnInit {

  @Input() fxData: FxData[] = [];
  @Input() title: string = "";

  public displayedCols: string[] = ['date', 'open', 'high', 'low', 'close'];

  constructor() { }

  ngOnInit() {}

}
