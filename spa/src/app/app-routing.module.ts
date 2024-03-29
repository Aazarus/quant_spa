import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'basics',
    loadChildren: () => import('./basics/basics.module').then( m => m.BasicsModule)
  },
  {
    path: 'angular-basics',
    loadChildren: () => import('./angular-basics/angular-basics.module').then( m => m.AngularBasicsModule)
  },
  {
    path: 'stock-basics',
    loadChildren: () => import('./stock-basics/stock-basics.module').then( m => m.StockBasicsModule)
  },
  {
    path: 'stock-data',
    loadChildren: () => import('./stock-data/stock-data.module').then( m => m.StockDataModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then( m => m.ChartsModule)
  },
  {
    path: 'real-time',
    loadChildren: () => import('./real-time/real-time.module').then(m => m.RealTimeModule)
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
