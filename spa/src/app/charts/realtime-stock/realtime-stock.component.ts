import { processStockChartData } from 'src/app/helpers/stock-chart-helper';
import { Subscription } from 'rxjs';
import { EChartsOption } from 'echarts';
import { Component, OnDestroy } from '@angular/core';
import { MarketData } from 'src/app/models/market-data';
import { MarketDataService } from 'src/app/services/market-data.service';
import { StockChartData } from 'src/app/models/stock-chart-data';

@Component({
  selector: 'app-realtime-stock',
  templateUrl: './realtime-stock.component.html',
  styleUrls: ['./realtime-stock.component.scss'],
})
export class RealtimeStockComponent implements OnDestroy {

  public title: string = "Realtime Stock Charts";

  public ticker: string = "";
  public startDate: string = "";
  public startDateLabel: string = "Select a start date"
  public endDate:string = "";
  public endDateLabel: string = "Select an end date"
  public period: string = "daily";
  public interval: number = 1000;
  public points: number = 50;
  public isLoading: boolean = false;

  public options: EChartsOption = null;
  public updateOptions: EChartsOption;
  private data: StockChartData;
  private timer: any;

  private _marketData: MarketData[] = [];

  private yahooStockSub: Subscription;

  constructor(private repo: MarketDataService) {
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.timer = null;
    this.data = null;

    if (!!this.yahooStockSub) {
      this.yahooStockSub.unsubscribe();
    }
  }

  public get marketData(): MarketData[] {
    return this._marketData;
  }

  public getStock(): void {
    this.isLoading = true;
    this.yahooStockSub = this.repo.getYahooStockWithResult(this.ticker, this.startDate, this.endDate, this.period).subscribe(
      result => {
        this._marketData = result;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  public startDateSelected(event: string): void {
    this.startDate = event
  }

  public endDateSelected(event: string): void {
    this.endDate = event
  }

  public get isFormValid(): boolean {
    return this.ticker === "" ||
    this.startDate === "" ||
    this.endDate === "";
  }

  public get isStartButtonValid(): boolean {
   return !(!!this._marketData && this._marketData.length > 0 && !this.timer);
  }

  public get hasChartStarted(): boolean {
    return !this.timer;
  }

  public createChart(): void {
    let stock = processStockChartData(this._marketData);

    this.data = {
      categoryData: [stock.categoryData[0]],
      values: [stock.values[0]],
      volumes: [stock.volumes[0]]
    };

    this.options = this.getOptions();

    let i = 1;
    let subtitle = "";

    this.timer = setInterval(() => {
      this.data.categoryData.push(stock.categoryData[i]);
      this.data.values.push(stock.values[i]);
      this.data.volumes.push(stock.volumes[i]);

      if (this.data.values.length > this.points) {
        this.data.categoryData.shift();
        this.data.values.shift();
        this.data.volumes.shift();
      }

      subtitle = `${stock.values.length - i} data points left`;

      if (i >= stock.values.length - 1) {
        subtitle = 'Finished';
        clearInterval(this.timer);
      }

      this.updateOptions = {
        title: {
          subtext: subtitle
        },
        xAxis: [
          { data: this.data.categoryData },
          { data: this.data.categoryData },
        ],
        series: [
          { data: this.data.values },
          { data: this.data.volumes },
        ]
      }
      i++;

    }, this.interval);
  }

  public stopChart(): void {
    if (!!this.timer) {
      clearInterval(this.timer);
    }

    this.timer = null;
    this.data = null;
  }

  private getOptions(): EChartsOption {
    var downColor = '#ec0000';
    var downBorderColor = '#8A0000';
    var upColor = '#00da3c';
    var upBorderColor = '#008F28';

    return {
      title: {
        text: `${this.ticker} Stock Price`,
        left: 'center',
        top: -5
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
        height: '60%'
      }, {
        left: 50,
        right: 20,
        height: '20%',
        top: '78%'
      }],
      xAxis: [{
        type: 'category',
        data: this.data.categoryData,
        axisLine: {
          onZero: false
        },
        splitLine: {
          show: false
        },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      }, {
        type: 'category',
        gridIndex: 1,
        data: this.data.categoryData,
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
        splitNumber: 20,
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
          show : false
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
        data: this.data.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        }
      }, {
        name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: this.data.volumes
      }]
    };
  }
}
