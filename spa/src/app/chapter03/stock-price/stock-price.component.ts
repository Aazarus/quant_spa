import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';
@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.scss'],
})
export class StockPriceComponent implements OnInit {

  public title: string = 'Stock Price';
  private stockId: number = 1;
  private ticker: string = 'A';
  private startDate: string = '2018-07-01';
  private endDate: string = '2018-08-01';
  private startDateWithTicker: string = '2018-07-01';
  private endDateWithTicker: string = '2018-08-01';

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getStockAndPrice(this.stockId, this.startDate, this.endDate);
    this.getStockAndPriceWithTicker(this.ticker, this.startDateWithTicker, this.endDateWithTicker);
  }

  public get stock(): Symbol {
    return this.repoService.stock;
  }

  public get stockWithTicker(): Symbol {
    return this.repoService.stockWithTicker;
  }

  public getStockAndPrice(stockId: number, startDate: string, endDate: string) {
    this.repoService.getStockAndPrice(stockId, startDate, endDate);
  }

  public getStockAndPriceWithTicker(ticker: string, startDate: string, endDate: string) {
    this.repoService.getStockAndPriceWithTicker(ticker, startDate, endDate);
  }
}
