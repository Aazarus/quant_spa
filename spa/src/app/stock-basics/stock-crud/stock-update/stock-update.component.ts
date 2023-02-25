import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss'],
})
export class StockUpdateComponent implements OnInit {

  public stockId: number;
  public symbol: Symbol = null;
  public updated: boolean = false;

  private getStockWithResultSub: Subscription;
  private updateStockWithResultSub: Subscription;

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.symbol = this.repoService.stock;

    if (!!this.getStockWithResultSub) {
      this.getStockWithResultSub.unsubscribe();
    }

    if (!!this.updateStockWithResultSub) {
      this.updateStockWithResultSub.unsubscribe();
    }
  }

  public getStock(): void {
    this.getStockWithResultSub = this.repoService.getStockWithResult(this.stockId).subscribe(
      result => {
        this.symbol = result;
        this.updated = false;
      },
      error => console.log("Received an error", error));
  }

  public updateStock(): void {
    this.updateStockWithResultSub = this.repoService.updateStockWithResult(this.symbol).subscribe(
      _ => this.updated = true,
    error => console.log("Received an error", error));
    this.updated = true;
    this.symbol = null;
  }
}
