import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockPriceComponent } from './stock-price/stock-price.component';
import { AllStocksComponent } from './all-stocks/all-stocks.component';

const routes: Routes = [
  {
    path: 'all-stocks',
    component: AllStocksComponent
  },
  {
    path: 'stock-price',
    component: StockPriceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter03RoutingModule { }
