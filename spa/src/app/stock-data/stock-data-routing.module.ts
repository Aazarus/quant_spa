import { AvFxComponent } from './alpha-vantage/av-fx/av-fx.component';
import { AvQuoteComponent } from './alpha-vantage/av-quote/av-quote.component';
import { AvBarComponent } from './alpha-vantage/av-bar/av-bar.component';
import { AvStockComponent } from './alpha-vantage/av-stock/av-stock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YahooStockComponent } from './yahoo/yahoo-stock/yahoo-stock.component';
import { YahooStockSaveComponent } from './yahoo/yahoo-stock-save/yahoo-stock-save.component';
import { IexStockComponent } from './iex/iex-stock/iex-stock.component';
import { IexQuoteComponent } from './iex/iex-quote/iex-quote.component';

const routes: Routes = [
  {
    path: 'yahoo-stock',
    component: YahooStockComponent
  },
  {
    path: 'yahoo-stock-save',
    component: YahooStockSaveComponent
  },
  {
    path: 'iex-stock',
    component: IexStockComponent
  },
  {
    path: 'iex-quote',
    component: IexQuoteComponent
  },
  {
    path: 'av-stock',
    component: AvStockComponent
  },
  {
    path: 'av-bar',
    component: AvBarComponent
  },
  {
    path: 'av-quote',
    component: AvQuoteComponent
  },
  {
    path: 'av-fx',
    component: AvFxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDataRoutingModule { }
