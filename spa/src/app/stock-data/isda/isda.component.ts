import { IsdaRateData } from './../../models/IsdaRateData';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isda',
  templateUrl: './isda.component.html',
  styleUrls: ['./isda.component.scss'],
})
export class IsdaComponent implements OnInit {

  public title: string = "ISDA";
  public currency: string = "";
  public date: string = "";
  public dateLabel: string = "Select a date";
  public isLoading: boolean = false;

  private _marketData: IsdaRateData[] = [];

  constructor(private repo: MarketDataService) { }

  ngOnInit() {}

  public get marketData(): IsdaRateData[] {
    return this._marketData;
  }

  public dateSelected(event: string): void {
    this.date = event
  }

  public getIsdaData(): void {
    this.isLoading = true;
    this.repo.getIsdaRate(this.currency, this.date).subscribe(
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
