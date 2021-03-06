import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BasicsRoutingModule } from './basics-routing.module';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  CounterComponent,
  FetchDataComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    BasicsRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ]
})
export class BasicsModule {}
