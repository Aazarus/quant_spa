import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { processStockChartData } from 'src/app/helpers/stock-chart-helper';
import { MarketData } from 'src/app/models/market-data';
import { StockChartData } from 'src/app/models/stock-chart-data';

@Component({
  selector: 'app-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.scss'],
})
export class CandleChartComponent implements OnInit, OnChanges {

  @Input() stockData: MarketData[];

  public title: string = "Stock Charts";

  private stock: StockChartData;
  public options: EChartsOption;

  constructor() { }

  ngOnInit() {
    this.setup();
  }

  ngOnChanges() {
    this.setup();
  }

  public setup(): void {
    if (this.stockData) {
      this.stock = processStockChartData(this.stockData);
      this.options = this.getOptions();
    }
  }

  private getOptions(): EChartsOption {

    var downColor = '#ec0000';
    var downBorderColor = '#8A0000';
    var upColor = '#00da3c';
    var upBorderColor = '#008F28';

    return {
      title: {
        text: this.getTitle(),
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        data: this.stock.categoryData,
        scale: true,
        axisLine: {
          onZero: false
        },
        splitLine: {
          show: false
        },
        min: 'dateMin',
        max: 'dateMax'
      },
      yAxis: {
        scale: true,
        splitArea: {
          show:true
        }
      },
      dataZoom: [{
        type: 'inside',
        start: 70,
        end: 100
      },{
        show: true,
        type: 'slider',
        start: 70,
        end: 100
      }],
      series: [{
        type: 'candlestick',
        data: this.stock.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        }
      }]
    };
  }

  private getTitle(): string {
    return `${this.stockData[0].ticker} Stock Price`;
  }

}
