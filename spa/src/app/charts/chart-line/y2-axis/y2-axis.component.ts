import { EChartsOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-y2-axis',
  templateUrl: './y2-axis.component.html',
  styleUrls: ['./y2-axis.component.scss'],
})
export class Y2AxisComponent implements OnInit {

  public option1: EChartsOption;
  public option2: EChartsOption;
  private data1Count = 21;
  private data2Count = 30;

  constructor() { }

  ngOnInit() {
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < this.data1Count; i++) {
      data1.push([i, i * Math.cos(i)]);
    }

    for (let i = 0; i < this.data2Count; i++) {
      data2.push([i, 100 + (200 * i)]);
    }

    this.option1 = {
      legend: {
        top: '15%',
          left: '10%',
          data: [
          { name: 'x*cos(x)' },
          { name: '100+20*x' }
        ]
      },
      title: {
        text: 'Single Y Axis',
          left: 'center'
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
          axisLine: { onZero: false }
      },
      yAxis: {
        type: 'value',
          name: 'Y Data',
          nameLocation: 'middle',
          nameGap: 50
      },
      series: [{
          name: 'x*cos(x)',
          type: 'line',
          data: data1,
          symbol: 'circle',
          symbolSize: 8
        },
        {
          name: '100+20*x',
          type: 'line',
          data: data2,
          symbol: 'diamond',
          symbolSize: 8
        }]
    };

    this.option2 = {
      legend: {
        top: '15%',
        left: '10%',
        data: [
          { name: 'x*cos(x)' },
          { name: '100+(20*x)' }
        ]
      },
      title: {
        text: 'Two Y Axes',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        backgroundColor: 'rgba(120, 120, 120, 0.9',
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        textStyle: {
          color: 'black'
        }
      },
      xAxis: {
        type: 'value',
        name: 'X Value',
        nameLocation: 'middle',
        nameGap: 30,
        axisLine: { onZero: false }
      },
      yAxis: [
        {
          type: 'value',
          name: 'x*cos(x)',
          nameLocation: 'middle',
          nameGap: 50
        },
        {
          type: 'value',
          name: '100+(20*x)',
          position: 'right',
          nameLocation: 'middle',
          nameGap: 50
        }
      ],
      series: [
        {
          name: 'x*cos(x)',
          type: 'line',
          data: data1,
          symbol: 'circle',
          symbolSize: 8
        },
        {
          name: '100+(20*x)',
          type: 'line',
          data: data2,
          yAxisIndex: 1,
          symbol: 'diamond',
          symbolSize: 8
        }
      ]
    };
  }
}
