import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { MarketQuote } from 'src/app/models/market-quote';
import { MarketDataService } from 'src/app/services/market-data.service';

@Component({
  selector: 'app-iex-quote',
  templateUrl: './iex-quote.component.html',
  styleUrls: ['./iex-quote.component.scss'],
})
export class IexQuoteComponent implements OnDestroy {

  public title = "IEX Quote";
  public ticker: string = "";
  private _data: MarketQuote = null;

  private iexQuoteSub: Subscription;

  constructor(private marketRepo: MarketDataService ) { }

  ngOnDestroy(): void {
    if (!!this.iexQuoteSub) {
      this.iexQuoteSub.unsubscribe();
    }
  }

  public get data(): MarketQuote {
    return this._data;
  }

  public getQuote(): void {
    this.iexQuoteSub = this.marketRepo.getIexQuoteWithResult(this.ticker).subscribe(
      result => this._data = result,
      error => console.log(error)
    );
  }
}
