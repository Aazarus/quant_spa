import { EChartsOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss'],
})
export class ResizeComponent implements OnInit {

  public options: EChartsOption;
  public autoResize = false;

  constructor() { }

  ngOnInit() {
    this.options = {
      grid: {
        left: 70
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',' Sun'],
        name: 'Date',
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'value',
        name: 'Temperature (F)',
        nameLocation: 'middle',
        nameGap: 40
      },
      series:[{
        data: [42, 35, 27, 38, 49, 33, 25],
        type: 'line'
      }]
    };
  }
}
