import { RepositoryService } from 'src/app/services/repository.service';
import { Component } from '@angular/core';
import { Symbol } from 'src/app/models/symbol'

@Component({
  selector: 'app-all-stocks',
  templateUrl: './all-stocks.component.html',
  styleUrls: ['./all-stocks.component.scss'],
})
export class AllStocksComponent {

  public readonly title: string = 'All Stocks'

  constructor(private repoService: RepositoryService) { }

  public get stocks(): Symbol[] {
    return this.repoService.stocks;
  }
}
