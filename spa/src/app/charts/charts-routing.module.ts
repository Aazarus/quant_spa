import { ChartSpecialisedComponent } from './chart-specialised/chart-specialised.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartLineComponent } from './chart-line/chart-line.component';

const routes: Routes = [
  {
    path: 'chart-line',
    component: ChartLineComponent
  },
  {
    path: 'chart-specialised',
    component: ChartSpecialisedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule { }
