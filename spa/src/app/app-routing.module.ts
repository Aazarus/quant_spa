import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chapter01',
    loadChildren: () => import('./chapter01/chapter01.module').then( m => m.Chapter01Module)
  },
  {
    path: 'chapter02',
    loadChildren: () => import('./chapter02/chapter02.module').then( m => m.Chapter02Module)
  },
  {
    path: 'chapter03',
    loadChildren: () => import('./chapter03/chapter03.module').then( m => m.Chapter03Module)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
