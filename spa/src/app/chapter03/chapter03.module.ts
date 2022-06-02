import { StockDeleteDialogComponent } from './stock-crud/stock-delete/stock-delete-dialog/stock-delete-dialog.component';
import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Chapter03RoutingModule } from './chapter03-routing.module';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { IndexDataComponent } from './index-data/index-data.component';
import { StockCreateComponent } from './stock-crud/stock-create/stock-create.component';
import { StockCrudComponent } from './stock-crud/stock-crud.component';
import { StockUpdateComponent } from './stock-crud/stock-update/stock-update.component';
import { StockDeleteComponent } from './stock-crud/stock-delete/stock-delete.component';
import { StockPriceChildComponent } from './stock-price/stock-price-child/stock-price-child.component';
import { StockPriceComponent } from './stock-price/stock-price.component';

const components = [
  AllStocksComponent,
  StockPriceComponent,
  StockPriceChildComponent,
  IndexDataComponent,
  StockCrudComponent,
  StockCreateComponent,
  StockUpdateComponent,
  StockDeleteComponent,
  StockDeleteDialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    Chapter03RoutingModule,
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
  ],
  entryComponents:[StockDeleteDialogComponent]
})
export class Chapter03Module {}
