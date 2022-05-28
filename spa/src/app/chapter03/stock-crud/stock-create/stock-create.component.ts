import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent {

  public ticker: string;
  public region: string;
  public sector: string;
  public stock: Symbol;

  constructor(private repoService: RepositoryService) { }

  public createStock(): void {
    const symbol: Symbol = {
      region: this.region,
      sector: this.sector,
      ticker: this.ticker
    };

    this.stock = this.repoService.createStock(symbol);
    this.region = this.sector = this.ticker = null;    
  }
}
