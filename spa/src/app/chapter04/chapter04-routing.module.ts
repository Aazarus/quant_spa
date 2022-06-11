import { YahooStockComponent } from './yahoo-stock/yahoo-stock.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'yahoo-stock',
    component: YahooStockComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter04RoutingModule { }
