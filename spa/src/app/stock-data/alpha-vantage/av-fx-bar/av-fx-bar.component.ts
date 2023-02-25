import { MarketDataService } from 'src/app/services/market-data.service';
import { FxData } from 'src/app/models/fx-data';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-av-fx-bar',
  templateUrl: './av-fx-bar.component.html',
  styleUrls: ['./av-fx-bar.component.scss'],
})
export class AvFxBarComponent implements OnDestroy {

  public title: string = "AlphaVantage FX Bar";
  public ticker: string = "";
  public interval: string = "";
  public outputSize: string = "";
  public isLoading: boolean = false;

  private _marketData: FxData[] = [];
  private avFxSub: Subscription;

  constructor(private repo: MarketDataService) { }

  ngOnDestroy() {
    if (!!this.avFxSub) {
      this.avFxSub.unsubscribe();
    }
  }

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
    this.avFxSub = this.repo.getAvFxBar(this.ticker, this.interval, this.outputSize).subscribe(
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
