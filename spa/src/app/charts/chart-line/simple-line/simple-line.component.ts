import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-simple-line',
  templateUrl: './simple-line.component.html',
  styleUrls: ['./simple-line.component.scss'],
})
export class SimpleLineComponent implements OnInit {

  public options: EChartsOption;
  private maxPlotPoints = 50;
  private delta = 5.0;

  constructor() { }

  ngOnInit() {
    const data: any = [];

    for (let i = 0; i < this.maxPlotPoints; i++) {
      const x = i / this.delta;
      data.push([x, Math.sin(x)]);
    }

    this.options = {
      title: {
        text: 'Simple Line Chart',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        type: 'value',
        name: 'X Value',
        nameLocation: 'middle',
        nameGap: 30,
        axisLine:{
          onZero: false
        }
      },
      yAxis: {
        type: 'value',
        name: 'Y Value',
        nameLocation: 'middle',
        nameGap: 50
      },
      series: [{
        name: 'line',
        type: 'line',
        data
      }]
    };
  }
}
