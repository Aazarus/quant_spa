import { Component } from '@angular/core';

interface page {
  title: string,
  url?: string,
  icon?: string,
  children?: page[],
  open?: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages: page[] = [
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
      title: 'Yahoo Data',
      children: [
        { title: 'Yahoo Stock', url: '/yahoo-data/yahoo-stock' },
      ]
    }
  ];

  constructor() {}
}
