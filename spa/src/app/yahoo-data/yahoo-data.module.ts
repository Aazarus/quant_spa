import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { YahooDataRoutingModule } from './yahoo-data-routing.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DATE_FORMATS } from 'src/app/shared/DateFormat';
import { YahooStockTableComponent } from './yahoo-stock/yahoo-stock-table/yahoo-stock-table.component';
import { YahooStockComponent } from './yahoo-stock/yahoo-stock.component';
import { YahooStockSaveComponent } from './yahoo-stock-save/yahoo-stock-save.component';

const components = [
  YahooStockComponent,
  YahooStockTableComponent,
  YahooStockSaveComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    YahooDataRoutingModule,
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
export class YahooDataModule {}
