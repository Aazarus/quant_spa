import { EChartsOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-lines',
  templateUrl: './multiple-lines.component.html',
  styleUrls: ['./multiple-lines.component.scss'],
})
export class MultipleLinesComponent implements OnInit {

  public options: EChartsOption;
  private maxPlotPoints = 50;
  private delta = 5.0;

  constructor() { }

  ngOnInit() {
    const data1 = [];
    const data2 = [];
    const data3 = [];

    for (let i = 0; i < this.maxPlotPoints; i++) {
      const x = i / this.delta;
      data1.push([x, Math.sin(x)]);
      data2.push([x, Math.cos(x)]);
      data3.push([x, Math.sin(x) * Math.sin(x)]);
    }

    this.options = {
      legend: {
        top: '8%',
        left: '10%',
      },
      title: {
        text: 'Multi-Line Chart',
        left: 'middle',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        backgroundColor: 'rgba(120, 120, 120, 0.9)',
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        textStyle: {
          color: 'white'
        }
      },
      xAxis: {
        type: 'value',
        name: 'X Value',
        nameLocation: 'middle',
        nameGap: 30,
        axisLine: {
          onZero: false
        }
      },
      yAxis: {
        type: 'value',
        name: 'Y Value',
        nameLocation: 'middle',
        nameGap: 50
      },
      series:[
      {
        name: 'sine',
        type: 'line',
        data: data1,
        symbol: 'circle',
        symbolSize: 8
      },
      {
        name: 'cosine',
        type: 'line',
        data: data2,
        symbol: 'diamond',
        symbolSize: 8
      },
      {
        name: 'sine^2',
        type: 'line',
        data: data3,
        symbol: 'triangle',
        symbolSize: 8
      }]
    }
  }

}
