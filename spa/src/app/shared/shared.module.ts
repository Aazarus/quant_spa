import { DatePickerComponent } from './date-picker/date-picker.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/material/material.module';
import { HeaderComponent } from './header/header.component';

const components = [
    HeaderComponent,
    DatePickerComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    IonicModule
  ],
  declarations: components,
  exports: components,
})
export class SharedModule {}
