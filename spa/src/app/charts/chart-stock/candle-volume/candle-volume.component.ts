import { MarketData } from './../../../models/market-data';
import { Component, OnInit, Input } from '@angular/core';
import { StockChartData } from 'src/app/models/stock-chart-data';
import { EChartsOption } from 'echarts';
import { processStockChartData } from 'src/app/helpers/stock-chart-helper';

@Component({
  selector: 'app-candle-volume',
  templateUrl: './candle-volume.component.html',
  styleUrls: ['./candle-volume.component.scss'],
})
export class CandleVolumeComponent implements OnInit {

  @Input() stockData: MarketData[];

  private stock: StockChartData;
  public options: EChartsOption;

  constructor() {
  }

  ngOnInit(): void {
    this.setup();
  }

  ngOnChanges() {
    this.setup();
  }

  private setup(): void {
    if (this.stockData) {
      this.stock = processStockChartData(this.stockData);
      this.options = this.getOptions();
    }
  }

  private getOptions(): EChartsOption {
    const downColor = '#ec0000';
    const downBorderColor = '#8A0000';
    const upColor = '#00da3c';
    const upBorderColor = '#008F28';

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
      grid: [{
        left: 50,
        right: 20,
        top: '10%',
        height: '50%',
      }, {
        left: 50,
        right: 20,
        height: '20%',
        top: '65%'
      }],
      xAxis: [{
        type: 'category',
        data: this.stock.categoryData,
        scale: true,
        splitNumber: 20,
        axisLine: {
          onZero: false
        },
        splitLine: {
          show: false
        },
        min: 'dataMin',
        max: 'dataMax',
      }, {
        type: 'category',
        gridIndex: 1,
        data: this.stock.categoryData,
        scale: true,
        splitNumber: 20,
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#777'
          }
        },
        min: 'dataMin',
        max: 'dataMax'
      }],
      yAxis: [{
        scale: true,
        splitArea: {
          show: true
        }
      }, {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      dataZoom: [{
        show: true,
        type: 'slider',
        start: 70,
        end: 100,
        xAxisIndex: [0, 1]
      }],
      series: [{
        name: 'Candlestick',
        type: 'candlestick',
        data: this.stock.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        }
      }, {
        name: 'volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: this.stock.volumes,
      }]
    };
  }

  private getTitle(): string {
    return `${this.stockData[0].ticker} Stock Price`;
  }
}
