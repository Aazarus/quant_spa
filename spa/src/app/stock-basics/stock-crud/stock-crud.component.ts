import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-crud',
  templateUrl: './stock-crud.component.html',
  styleUrls: ['./stock-crud.component.scss'],
})
export class StockCrudComponent implements OnInit {

  public title: string = "Stock CRUD"

  constructor() { }

  ngOnInit() {}

}
