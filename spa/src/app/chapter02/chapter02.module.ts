import { HeaderComponent } from '../shared/header/header.component';
import { CandleService } from './../services/candle.service';

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
import { SharedModule } from '../shared/shared.module';

const components = [
  InterpolationComponent,
  OneWayBindingComponent,
  EventBindingComponent
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
