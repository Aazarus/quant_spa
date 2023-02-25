import { Subscription } from 'rxjs';
import { AvSectorPerf } from 'src/app/models/av-sector-perf';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-av-sector',
  templateUrl: './av-sector.component.html',
  styleUrls: ['./av-sector.component.scss'],
})
export class AvSectorComponent implements OnDestroy {

  public title: string = "AlphaVantage Sector Performance";
  public displayedCols: string[] = [
    'rank', 'service', 'desc', 'staple', 'energy', 'fin', 'health', 'indu', 'it', 'material', 'util'
  ];
  public isLoading: boolean = false;
  private _marketData: AvSectorPerf[];

  private avSecPerfSub:Subscription;

  constructor(private repo: MarketDataService) { }

  ngOnDestroy() {
    if (!!this.avSecPerfSub) {
      this.avSecPerfSub.unsubscribe();
    }
  }

  public get marketData(): AvSectorPerf[] {
    return this._marketData;
  }

  public getSector(): void {
    this.isLoading = true;
    this.avSecPerfSub = this.repo.getAvSectorPerformance().subscribe(
      result => {
        this._marketData = result;
        this.isLoading = false;
      },
      error => {
        console.log(error)
        this.isLoading = false;
      }
    );
  }
}
