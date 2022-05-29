import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss'],
})
export class StockUpdateComponent implements OnInit {

  public stockId: number = 1;
  public symbol: Symbol = null;
  public updated: boolean = false;

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.symbol = this.repoService.stock;
  }

  public getStock(): void {
    this.repoService.getStockWithResult(this.stockId).subscribe(
      result => {
        this.symbol = result;
        this.updated = false;
      },
      error => console.log("Received an error", error));
  }

  public updateStock(): void {
    this.repoService.updateStockWithResult(this.symbol).subscribe(
      _ => this.updated = true,
    error => console.log("Received an error", error));
    this.updated = true;
    this.symbol = null;
  }
}
