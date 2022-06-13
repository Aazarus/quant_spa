import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.scss']
})
export class StockPriceComponent {

  public title: string = 'Stock Price';
  public stockId: number;
  public ticker: string;
  public startDate: string;
  public startDateLabel: string = "Select a start date"
  public endDate: string;
  public endDateLabel: string = "Select an end date"

  private getWithTicker: boolean = false;

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private repoService: RepositoryService) { }


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

  public startDateSelected(event: string): void {
    this.startDate = event
  }
  
  public endDateSelected(event: string): void {
    this.endDate = event
  }
}
