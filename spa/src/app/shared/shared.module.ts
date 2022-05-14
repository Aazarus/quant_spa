import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/material/material.module';
import { HeaderComponent } from './header/header.component';

const components = [
    HeaderComponent
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
