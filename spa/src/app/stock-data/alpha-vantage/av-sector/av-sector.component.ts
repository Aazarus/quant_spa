import { AvSectorPerf } from 'src/app/models/av-sector-perf';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-sector',
  templateUrl: './av-sector.component.html',
  styleUrls: ['./av-sector.component.scss'],
})
export class AvSectorComponent implements OnInit {

  public title: string = "AlphaVantage Sector Performance";
  public displayedCols: string[] = [
    'rank', 'service', 'desc', 'staple', 'energy', 'fin', 'health', 'indu', 'it', 'material', 'util'
  ];
  private _marketData: AvSectorPerf[];

  constructor(private repo: MarketDataService) { }

  ngOnInit() {}

  public get marketData(): AvSectorPerf[] {
    return this._marketData;
  }

  public getSector(): void {
    this.repo.getAvSectorPerformance().subscribe(
      result => {
        this._marketData = result;
      },
      error => console.log(error)
    );
  }

}
