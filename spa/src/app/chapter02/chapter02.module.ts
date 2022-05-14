import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Chapter02RoutingModule } from './chapter02-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  InterpolationComponent,
  OneWayBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  DirectiveTestComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    Chapter02RoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ],
  providers: [
    CandleService
  ]
})
export class Chapter02Module {}
