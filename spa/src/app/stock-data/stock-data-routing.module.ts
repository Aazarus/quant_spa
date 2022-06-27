import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YahooStockComponent } from './yahoo/yahoo-stock/yahoo-stock.component';
import { YahooStockSaveComponent } from './yahoo/yahoo-stock-save/yahoo-stock-save.component';

const routes: Routes = [
  {
    path: 'yahoo-stock',
    component: YahooStockComponent
  },
  {
    path: 'yahoo-stock-save',
    component: YahooStockSaveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDataRoutingModule { }
