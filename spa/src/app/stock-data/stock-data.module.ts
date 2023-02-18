import { AvFxBarComponent } from './alpha-vantage/av-fx-bar/av-fx-bar.component';
import { FxTableComponent } from './fx-table/fx-table.component';
import { AvFxComponent } from './alpha-vantage/av-fx/av-fx.component';
import { AvQuoteComponent } from './alpha-vantage/av-quote/av-quote.component';
import { AvBarComponent } from './alpha-vantage/av-bar/av-bar.component';
import { AvStockComponent } from './alpha-vantage/av-stock/av-stock.component';
import { IexQuoteComponent } from './iex/iex-quote/iex-quote.component';
import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DATE_FORMATS } from 'src/app/shared/DateFormat';
import { StockTableComponent } from './stock-table/stock-table.component';
import { YahooStockComponent } from './yahoo/yahoo-stock/yahoo-stock.component';
import { YahooStockSaveComponent } from './yahoo/yahoo-stock-save/yahoo-stock-save.component';
import { StockDataRoutingModule } from './stock-data-routing.module';
import { IexStockComponent } from './iex/iex-stock/iex-stock.component';

const components = [
  YahooStockComponent,
  StockTableComponent,
  YahooStockSaveComponent,
  IexStockComponent,
  IexQuoteComponent,
  AvStockComponent,
  AvBarComponent,
  AvQuoteComponent,
  AvFxComponent,
  FxTableComponent,
  AvFxBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    StockDataRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    components,
  ],
  exports: [
    components
  ],
  providers: [
    CandleService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class StockDataModule {}
