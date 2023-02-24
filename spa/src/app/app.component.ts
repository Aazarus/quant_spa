import { Component } from '@angular/core';

interface Page {
  title: string;
  url?: string;
  icon?: string;
  children?: Page[];
  open?: boolean;
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages: Page[] = [
    { title: 'Home', url: '/home', icon: 'home' },
    {
      title: 'Basics',
      children: [
        { title: 'Counter', url: '/basics/counter' },
        { title: 'Weather Forecast', url: '/basics/fetch-data' }
      ]
    },
    {
      title: 'Angular Basics',
      children: [
        { title: 'Interpolation', url: '/angular-basics/interpolation' },
        { title: 'One Way Binding', url: '/angular-basics/one-way-binding' },
        { title: 'Event Binding', url: '/angular-basics/event-binding' },
        { title: 'Two Way Binding', url: '/angular-basics/two-way-binding' },
        { title: 'Directive Test', url: '/angular-basics/directive-test' },
        { title: 'Input Output', url: '/angular-basics/input-output' },
      ]
    },
    {
      title: 'Stock Basics',
      children: [
        { title: 'All Stocks', url: '/stock-basics/all-stocks' },
        { title: 'Stock Price', url: '/stock-basics/stock-price' },
        { title: 'Index Data', url: '/stock-basics/index-data' },
        { title: 'Stock CRUD', url: '/stock-basics/stock-crud' },
      ]
    },
    {
      title: 'Stock Data',
      children: [
        { title: 'Yahoo Stock', url: '/stock-data/yahoo-stock' },
        { title: 'Yahoo Stock Save', url: '/stock-data/yahoo-stock-save' },
        { title: 'IEX Stock', url: '/stock-data/iex-stock' },
        { title: 'IEX Quote', url: '/stock-data/iex-quote' },
        { title: 'AV Stock', url: '/stock-data/av-stock' },
        { title: 'AV Bar', url: '/stock-data/av-bar' },
        { title: 'AV Quote', url: '/stock-data/av-quote' },
        { title: 'AV FX', url: '/stock-data/av-fx' },
        { title: 'AV FX Bar', url: '/stock-data/av-fx-bar' },
        { title: 'AV Sector Performance', url: '/stock-data/av-sector' },
        { title: 'Quandl Stock', url: '/stock-data/quandl-stock' },
        { title: 'ISDA', url: '/stock-data/isda' },
      ]
    },
    {
      title: 'Charts',
      children: [
        { title: 'Line Charts', url: '/charts/chart-line' },
        { title: 'Specialised Charts', url: '/charts/chart-specialised' },
        { title: 'Stock Charts', url: '/charts/chart-stock' }
      ]
    }
  ];

  constructor() {}
}
