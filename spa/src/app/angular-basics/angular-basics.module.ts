import { StockDetailComponent } from './input-output/stock-detail/stock-detail.component';
import { StockListComponent } from './input-output/stock-list/stock-list.component';
import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { HighlightDirective } from './highlight.directive';
import { InputOutputComponent } from './input-output/input-output.component';

const components = [
  InterpolationComponent,
  OneWayBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  DirectiveTestComponent,
  InputOutputComponent,
  StockListComponent,
  StockDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    AngularBasicsRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    components,
    HighlightDirective
  ],
  exports: [
    components
  ],
  providers: [
    CandleService
  ]
})
export class AngularBasicsModule {}
