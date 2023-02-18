import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnInit } from '@angular/core';
import { FxData } from 'src/app/models/fx-data';

@Component({
  selector: 'app-av-fx',
  templateUrl: './av-fx.component.html',
  styleUrls: ['./av-fx.component.scss'],
})
export class AvFxComponent implements OnInit {

  public title: string = "AlphaVantage FX EoD";
  public ticker: string = "";
  public period: string = "";
  public startDate: string = "";
  public startDateLabel: string = "Select a start date";
  private _marketData: FxData[];


  constructor(private repo: MarketDataService) { }

  ngOnInit() {}

  public getFxData(): void {
    this.repo.getAvFx(this.ticker, this.startDate, this.period).subscribe(
      result => {
        this._marketData = result;
      }
    )
  }

  public startDateSelected(event: string): void {
    this.startDate = event
  }

  public get marketData(): FxData[] {
    return this._marketData;
  }

  public get isFormValid(): boolean {
    return this.ticker === "" ||
    this.period === "" ||
    this.startDate === "";
  }
}
