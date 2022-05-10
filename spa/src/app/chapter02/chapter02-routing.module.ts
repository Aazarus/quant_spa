import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'one-way-binding',
    component: OneWayBindingComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter02RoutingModule { }
