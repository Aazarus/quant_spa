import { MarketDataService } from 'src/app/services/market-data.service';
import { FxData } from 'src/app/models/fx-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-fx-bar',
  templateUrl: './av-fx-bar.component.html',
  styleUrls: ['./av-fx-bar.component.scss'],
})
export class AvFxBarComponent implements OnInit {

  public title: string = "AlphaVantage FX Bar";
  public ticker: string = "";
  public interval: string = "";
  public outputSize: string = "";
  public isLoading: boolean = false;

  private _marketData: FxData[] = [];

  constructor(private repo: MarketDataService) { }

  ngOnInit() {}

  public get marketData(): FxData[] {
    return this._marketData;
  }

  public get isFormValid(): boolean {
    return this.ticker === "" ||
    this.interval === "" ||
    this.outputSize === "";
  }

  public getFxBarData(): void {
    this.isLoading = true;
    this.repo.getAvFxBar(this.ticker, this.interval, this.outputSize).subscribe(
      result=>{
        this.isLoading = false;
        this._marketData = result;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
