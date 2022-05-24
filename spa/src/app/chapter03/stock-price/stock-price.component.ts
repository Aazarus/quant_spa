import { RepositoryService } from './../../services/repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.scss'],
})
export class StockPriceComponent implements OnInit {

  public title: string = 'Stock Price';

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {

  }
}
