import { ISubscription } from '@microsoft/signalr/src/Stream';
import { SignalrService } from './../../services/signalr.service';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { MarketData } from 'src/app/models/market-data';
import { StockChartData } from 'src/app/models/stock-chart-data';
import { StockOutput } from 'src/app/models/stock-output';

@Component({
  selector: 'app-real-time-server',
  templateUrl: './real-time-server.component.html',
  styleUrls: ['./real-time-server.component.scss'],
})
export class RealTimeServerComponent implements OnInit {

  public title: string = "Real Time Server";

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
  public currentlyStreaming: boolean = false;

  private _marketData: MarketData[] = [];

  private subscription: ISubscription<any>;

  constructor(private service: SignalrService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.data = null;
    this.currentlyStreaming = false;

    if (!!this.subscription) {
      this.subscription.dispose();
    }

  }

  public get marketData(): MarketData[] {
    return this._marketData;
  }

  public startDateSelected(event: string): void {
    this.startDate = event
  }

  public endDateSelected(event: string): void {
    this.endDate = event
  }

  public get isFormInvalid(): boolean {
    return this.ticker === "" ||
    this.startDate === "" ||
    this.endDate === "";
  }

  public get isStartButtonInvalid(): boolean {
   return this.ticker === "" ||
    this.interval < 1 ||
    this.startDate === "" ||
    this.endDate === "";
  }

  public get hasChartStarted(): boolean {
    return !!this.subscription;
  }

  public getChart(): void {
    const categoryData =[];
    const values = [];
    const volumes = [];

    this.data = {
      categoryData,
      values,
      volumes
    };

    this.options = this.getOptions();
    this.currentlyStreaming = true;

    let i = 1;

    this.subscription = this.service.startStream(this.ticker, this.startDate, this.endDate, this.interval).subscribe(
      {
        next: (item: StockOutput) => {
          console.log("🚀 ~ file: real-time-server.component.ts:97 ~ RealTimeServerComponent ~ getChart ~ item:", item)
          this.data.categoryData.push(item.stock.date.toString().substring(0, 10));
          this.data.values.push([item.stock.open, item.stock.close, item.stock.low, item.stock.high]);
          this.data.volumes.push(item.stock.volume);

          if (this.data.categoryData.length > this.points) {
            this.data.categoryData.shift();
            this.data.values.shift();
            this.data.volumes.shift();
          }

          let subtitle = `(${item.totalDataPoints - i} data points left)`;

          if (item.status == 'finished') {
            subtitle = 'finished';
            this.stopChart();
          }

          this.updateOptions = {
            title: {
              subtext: subtitle
            },
            xAxis: [
              { data: this.data.categoryData },
              { data: this.data.categoryData }
            ],
            series: [
              {
                type: 'candlestick',
                data: this.data.values
              },
              {
                type: 'bar',
                data: this.data.volumes
              }
            ]
          };
          i++;
        },
        complete: ()=> {
          console.log("finished");
        },
        error: (err) => {
          this.currentlyStreaming = false;
          console.error(err);
        }
      }
    );
  }

  private getOptions(): EChartsOption {
    const downColor = '#ec0000';
    const downBorderColor = '#8A0000';
    const upColor = '#00da3c';
    const upBorderColor = '#008F28';

    return {
      title: {
        text: this.ticker + ': Stock Price',
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
      },
      {
        left: 50,
        right: 20,
        top: '78%',
        height: '20%'
      }],
      xAxis: [{
        type: 'category',
        data: this.data.categoryData,
        scale: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      }, {
        type: 'category',
        gridIndex: 1,
        data: this.data.categoryData,
        scale: true,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#777' } },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      }],
      yAxis: [{
        scale: true,
        splitArea: {
          show: true
        },
        type: 'value'
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
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
      },
      {
        name: 'volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
        },
        data: this.data.volumes
      }]
    };
  }

  public stopChart(): void {
    this.subscription.dispose();
  }
}
