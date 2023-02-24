import { EChartsOption } from 'echarts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  @Input() chart: string = "";

  public vertical: EChartsOption;
  public horizontal: EChartsOption;
  public group: EChartsOption;
  public stack: EChartsOption;

  constructor() { }

  ngOnInit() {
    this.vertical = this.getVertical();
    this.horizontal = this.getHorizontal();
    this.group = this.getGroup();
    this.stack = this.getStack();
  }

  private getVertical(): EChartsOption {
    return {
      title: {
        text: 'Vertical Bar Chart',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    };
  }

  private getHorizontal(): EChartsOption {
    return {
      title: {
        text: 'Horizontal Bar Chart',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    };
  }

  private getGroup(): EChartsOption {
    return {
      title: {
        text: 'Group Bar Chart',
        left: 'center'
      },
      legend: {
        top: '15%',
        left: '15%',
        data: ['Houston', 'Los Angeles', 'New York', 'Chicago', 'Philadelphia']
      },
      tooltip: {},
      xAxis: [{
        type: 'category',
        data: ['1990', '2000', '2005', '2010', '2015']
      }],
      yAxis: [{
        type: 'value',
        name: 'Population (in millions)',
        nameLocation: 'middle',
        nameGap: 25
      }],
      series: [
        {
          name: 'Houston',
          type: 'bar',
          data: [1.70, 1.98, 2.08, 2.10, 2.30]
        },
        {
          name: 'Los Angeles',
          type: 'bar',
          data: [3.49, 3.70, 3.79, 3.79, 3.97]
        },
        {
          name: 'New York',
          type: 'bar',
          data: [7.32, 8.02, 8.21, 8.18, 8.55]
        },
        {
          name: 'Chicago',
          type: 'bar',
          data: [2.78, 2.90, 2.82, 2.70, 2.72]
        },
        {
          name: 'Philadelphia',
          type:'bar',
          data: [1.59, 1.51, 1.52, 1.53, 1.57]
        }
      ]
    };
  }

  private getStack(): EChartsOption {
    return {
      title: {
        text: 'Stack'
      },
      legend: {
        left: '20%',
        data: ['Houston', 'Los Angeles', 'New York', 'Chicago', 'Philadelphia']
      },
      tooltip: {},
      xAxis: [{
        type: 'category',
        data: ['1990', '2000', '2005', '2010', '2015']
      }],
      yAxis: [{
        type: 'value',
        name: 'Population (in millions)',
        nameLocation: 'middle',
        nameGap: 25
      }],
      series: [
        {
          name: 'Houston',
          type: 'bar',
          stack: 'total',
          data: [1.70, 1.98, 2.08, 2.10, 2.30]
        },
        {
          name: 'Los Angeles',
          type: 'bar',
          stack: 'total',
          data: [3.49, 3.70, 3.79, 3.79, 3.97]
        },
        {
          name: 'New York',
          type: 'bar',
          stack: 'total',
          data: [7.32, 8.02, 8.21, 8.18, 8.55]
        },
        {
          name: 'Chicago',
          type: 'bar',
          stack: 'total',
          data: [2.78, 2.90, 2.82, 2.70, 2.72]
        },
        {
          name: 'Philadelphia',
          type:'bar',
          stack: 'total',
          data: [1.59, 1.51, 1.52, 1.53, 1.57]
        }
      ]
    };
  }
}
