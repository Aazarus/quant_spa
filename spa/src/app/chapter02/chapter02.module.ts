import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Chapter02RoutingModule } from './chapter02-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { InterpolationComponent } from './interpolation/interpolation.component';

const components = [
  InterpolationComponent,
  OneWayBindingComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    Chapter02RoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ]
})
export class Chapter02Module {}
