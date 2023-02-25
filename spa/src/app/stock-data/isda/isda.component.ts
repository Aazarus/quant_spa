import { Subscription } from 'rxjs';
import { IsdaRateData } from 'src/app/models/IsdaRateData';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-isda',
  templateUrl: './isda.component.html',
  styleUrls: ['./isda.component.scss'],
})
export class IsdaComponent implements OnDestroy {

  public title: string = "ISDA";
  public currency: string = "";
  public date: string = "";
  public dateLabel: string = "Select a date";
  public isLoading: boolean = false;

  private _marketData: IsdaRateData[] = [];

  private isdaRate: Subscription;

  constructor(private repo: MarketDataService) { }

  ngOnDestroy() {
    if (!!this.isdaRate) {
      this.isdaRate.unsubscribe();
    }
  }

  public get marketData(): IsdaRateData[] {
    return this._marketData;
  }

  public dateSelected(event: string): void {
    this.date = event
  }

  public getIsdaData(): void {
    this.isLoading = true;
    this.isdaRate = this.repo.getIsdaRate(this.currency, this.date).subscribe(
      result => {
        this.isLoading = false;
        this._marketData = result;
      },
      error => {
        this.isLoading = false;
        console.error(error);
      }
    )
  }
}
