import { YahooStockComponent } from './yahoo-stock/yahoo-stock.component';
import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Chapter04RoutingModule } from './chapter04-routing.module';

const components = [
  YahooStockComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    Chapter04RoutingModule,
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
    CandleService
  ]
})
export class Chapter04Module {}
