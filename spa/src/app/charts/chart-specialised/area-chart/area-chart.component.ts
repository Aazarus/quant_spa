import { EChartsOption } from 'echarts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {

  @Input() chart: string = "";

  public simple: EChartsOption;
  public multiple: EChartsOption;
  public stack: EChartsOption;

  private xData = [];
  private data1 = [];
  private data2 = [];
  private data3 = [];
  private maxDataItems = 7;
  private delta = 1.2;

  constructor() { }

  ngOnInit() {
    this.getData();
    this.simple = this.getSimple();
    this.multiple = this.getMultiple();
    this.stack = this.getStack();
    console.log("🚀 ~ file: area-chart.component.ts:33 ~ AreaChartComponent ~ ngOnInit ~ this.chart:", this.chart)
  }

  private getData(): void {

    for (let i = 0; i <= this.maxDataItems; i++) {
      this.xData.push(i);
      this.data1.push(this.delta + Math.sin(i));
      this.data2.push(this.delta + Math.cos(i));
      this.data3.push(this.delta + Math.sin(i) * Math.cos(i));
    }
  }

  private getSimple(): EChartsOption {
    return {
      title: {
        text: 'Simple Area'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer:{
          type: 'cross'
        }
      },
      xAxis: {
        data: this.xData,
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.data1,
        type: 'line',
        areaStyle: {},
        symbol: 'none'
      }]
    };
  }

  private getMultiple(): EChartsOption {
    return {
      title: {
        text: 'Multiple Area'
      },
      legend: {
        top: '8%',
        left: '15%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        data: this.xData,
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.data1,
        name: 'Data 1',
        type: 'line',
        areaStyle: {},
        symbol: 'none'
      },{
        data: this.data2,
        name: 'Data 2',
        type: 'line',
        areaStyle: {},
        symbol: 'none'
      },{
        data: this.data3,
        name: 'Data 3',
        type: 'line',
        areaStyle: {},
        symbol: 'none'
      }]
    };
  }

  private getStack(): EChartsOption {
    return {
      title: {
        text: 'Stack Area'
      },
      legend: {
        top: '8%',
        left: '15%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        data: this.xData,
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.data1,
        name: 'Data 1',
        type: 'line',
        areaStyle: {},
        stack: 'total',
        symbol: 'none'
      },{
        data: this.data2,
        name: 'Data 2',
        type: 'line',
        areaStyle: {},
        stack: 'total',
        symbol: 'none'
      },{
        data: this.data3,
        name: 'Data 3',
        type: 'line',
        areaStyle: {},
        stack: 'total',
        symbol: 'none'
      }]
    }
  }

}
