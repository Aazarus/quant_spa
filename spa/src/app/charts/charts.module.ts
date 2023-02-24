import { CandleChartComponent } from './chart-stock/candle-chart/candle-chart.component';
import { ChartStockComponent } from './chart-stock/chart-stock.component';
import { PolarChartComponent } from './chart-specialised/polar-chart/polar-chart.component';
import { PieChartComponent } from './chart-specialised/pie-chart/pie-chart.component';
import { BarChartComponent } from './chart-specialised/bar-chart/bar-chart.component';
import { AreaChartComponent } from './chart-specialised/area-chart/area-chart.component';
import { ChartSpecialisedComponent } from './chart-specialised/chart-specialised.component';
import { ResizeComponent } from './chart-line/resize/resize.component';
import { Y2AxisComponent } from './chart-line/y2-axis/y2-axis.component';
import { MultipleLinesComponent } from './chart-line/multiple-lines/multiple-lines.component';
import { SimpleLineComponent } from './chart-line/simple-line/simple-line.component';
import { ChartRoutingModule } from './charts-routing.module';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { CandleService } from 'src/app/services/candle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DATE_FORMATS } from 'src/app/shared/DateFormat';
import { NgxEchartsModule } from 'ngx-echarts';
import { AngularDraggableModule } from 'angular2-draggable';

const components = [
  ChartLineComponent,
  SimpleLineComponent,
  MultipleLinesComponent,
  Y2AxisComponent,
  ResizeComponent,
  ChartSpecialisedComponent,
  AreaChartComponent,
  BarChartComponent,
  PieChartComponent,
  PolarChartComponent,
  ChartStockComponent,
  CandleChartComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    IonicModule,
    HttpClientModule,
    ChartRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    AngularDraggableModule
  ],
  declarations: [
    components,
  ],
  exports: [
    components
  ],
  providers: [
    CandleService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class ChartsModule {}
