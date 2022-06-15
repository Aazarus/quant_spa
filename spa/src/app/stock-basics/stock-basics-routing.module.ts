
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockPriceComponent } from './stock-price/stock-price.component';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { IndexDataComponent } from './index-data/index-data.component';
import { StockCrudComponent } from './stock-crud/stock-crud.component';

const routes: Routes = [
  {
    path: 'all-stocks',
    component: AllStocksComponent
  },
  {
    path: 'stock-price',
    component: StockPriceComponent
  },
  {
    path: 'index-data',
    component: IndexDataComponent
  },
  {
    path: 'stock-crud',
    component: StockCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockBasicsRoutingModule { }
