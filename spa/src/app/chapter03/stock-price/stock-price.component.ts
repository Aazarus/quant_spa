import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.scss']
})
export class StockPriceComponent implements OnInit {

  public title: string = 'Stock Price';
  public stockId: number = 103;
  public ticker: string = 'IBM';
  public startDate: string = '2017-11-07';
  public endDate: string = '2017-11-18';

  private getWithTicker: boolean = false;

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getStockAndPriceWithTicker();
    this.getStockAndPrice();
  }

  public get stock(): Symbol {
    if (this.getWithTicker)
      return this.repoService.stockWithTicker;
    
    return this.repoService.stock;
  }

  public getStock(): void {
    if (this.getWithTicker) {
      this.getStockAndPriceWithTicker();
    } else {
      this.getStockAndPrice();
    }
  }

  public getStockAndPrice(): void {
    this.repoService.getStockAndPrice(this.stockId, this.startDate, this.endDate);
  }

  public getStockAndPriceWithTicker(): void {
    this.repoService.getStockAndPriceWithTicker(this.ticker, this.startDate, this.endDate);
  }

  public onTabChanged(event: any): void {
    this.getWithTicker = event.index;
    this.getStock();
  }
}
