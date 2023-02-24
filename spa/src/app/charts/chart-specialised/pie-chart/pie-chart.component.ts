import { PieChartData } from './../../../models/pie-chart-data';
import { EChartsOption } from 'echarts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {

  @Input() chart: string;

  private data: PieChartData[];
  public options: EChartsOption;

  constructor() { }

  ngOnInit() {
    this.getData();
    this.setOption();
  }

  private getData(): void {
    this.data = [
      { value: 30, name: "Soc. Sec. Tax" },
      { value: 8, name: "Misc." },
      { value: 15, name: "Borrowing" },
      { value: 35, name: "Income Tax" },
      { value: 12, name: "Corp. Tax" }
    ];
  }

  private getPie(title: string, rose: 'radius' | 'area' | null, r1: number | string, r2: string): EChartsOption {
    return {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {},
      series:[{
        data: this.data,
        type: 'pie',
        roseType: rose,
        radius: [r1, r2]
      }]
    };
  }

  private setOption(): void {
    if (this.chart === "simple") {
      this.options = this.getPie("Simple Pie Chart", null, '0', '55%');
    } else if (this.chart === "doughnut") {
      this.options = this.getPie("Doughnut Pie Chart", null, '30%', '55%');
    } else if (this.chart === "area") {
      this.options = this.getPie("Rose Area Pie Chart", 'area', '10%', '55%');
    } else if (this.chart === "radius") {
      this.options = this.getPie("Rose Radius Pie Chart", 'radius', '10%', '55%');
    } else {
      this. options = null;
    }
  }

}
