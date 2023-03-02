import { RealTimeServerComponent } from './real-time-server/real-time-server.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'real-time-server',
    component: RealTimeServerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealTimeRoutingModule { }
