import { AvQuote } from 'src/app/models/av-quote';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-av-quote',
  templateUrl: './av-quote.component.html',
  styleUrls: ['./av-quote.component.scss'],
})
export class AvQuoteComponent implements OnDestroy {

  public ticker: string = "A";
  public title: string = "AlphaVantage Quote";
  private _quote: AvQuote;
  public isLoading: boolean = false;

  private avQuoteSub: Subscription;

  constructor(private repo: MarketDataService) { }

  ngOnDestroy() {
    if (!!this.avQuoteSub) {
      this.avQuoteSub.unsubscribe();
    }
  }

  public get quote(): AvQuote {
    return this._quote;
  }

  public getQuote(): void {
    this.isLoading = true;
    this.avQuoteSub = this.repo.getAvQuote(this.ticker).subscribe(result => {
      this._quote = result;
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.isLoading = false;
    });
  }
}
