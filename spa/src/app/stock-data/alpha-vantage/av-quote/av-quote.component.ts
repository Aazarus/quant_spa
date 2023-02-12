import { AvQuote } from 'src/app/models/av-quote';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av-quote',
  templateUrl: './av-quote.component.html',
  styleUrls: ['./av-quote.component.scss'],
})
export class AvQuoteComponent implements OnInit {

  public ticker: string = "A";
  public title: string = "AlphaVantage Quote";
  private _quote: AvQuote;
  public isLoading: boolean = false;

  constructor(private repo: MarketDataService) { }

  ngOnInit() {}

  public get quote(): AvQuote {
    return this._quote;
  }

  public getQuote(): void {
    this.isLoading = true;
    this.repo.getAvQuote(this.ticker).subscribe(result => {
      this._quote = result;
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.isLoading = false;
    });
  }
}
