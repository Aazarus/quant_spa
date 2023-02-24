import { EChartsOption } from 'echarts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss'],
})
export class PolarChartComponent implements OnInit {

  @Input() chart: string;

  public options: EChartsOption;

  private data1 = [];
  private data2 = [];
  private data3 = [];

  private totalItems = 360;

  constructor() { }

  ngOnInit() {
    this.getData();
    this.setOption();
  }

  private getData(): void {

    for (let i = 0; i< this.totalItems; i++) {
      let theta = i /180 * Math.PI;
      let r1 = Math.sin(2 * theta) * Math.cos(2 * theta);
      let r2 = Math.log(1 + Math.cos(2 * theta));
      let r3 = Math.log(1 + Math.sin(2 * theta));
      this.data1.push([r1, i]);
      this.data2.push([r2, i]);
      this.data3.push([r3, i]);
    }
  }


  private setOption(): void {
    if (this.chart === "single") {
      this.options = this.getSingleLineOptions();
    } else if (this.chart === "multiple") {
      this.options = this.getMultipleLineOptions();
    } else {
      this.options = null;
    }
  }

  private getSingleLineOptions(): EChartsOption {
    return {
      title: {
        text: "Single Line"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      polar: {
        center: ['50%', '50%']
      },
      angleAxis: {
        type: 'value',
        startAngle: 0
      },
      radiusAxis: {
        min: 0
      },
      series: [{
        data: this.data1,
        type: 'line',
        coordinateSystem: 'polar',
        showSymbol: false
      }]
    };
  }

  private getMultipleLineOptions(): EChartsOption {
    return {
      title: {
        text: 'Multiple Lines'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      polar: {
        center: ['50%', '50%']
      },
      angleAxis: {
        type: 'value',
        startAngle: 0
      },
      radiusAxis: {
        min: -5,
        max: 1
      },
      series: [{
        data: this.data2,
        name: 'cosine',
        type: 'line',
        coordinateSystem: 'polar',
        showSymbol: false
      },{
        data: this.data3,
        name: 'sine',
        type: 'line',
        coordinateSystem: 'polar',
        showSymbol: false
      }]
    };
  }
}
