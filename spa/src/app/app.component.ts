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
      title: 'Chapter 01',
      children: [
        { title: 'Counter', url: '/chapter01/counter' },
        { title: 'Weather Forecast', url: '/chapter01/fetch-data' }
      ]
    },
    {
      title: 'Chapter 02',
      children: [
        { title: 'Interpolation', url: '/chapter02/interpolation' },
        { title: 'One Way Binding', url: '/chapter02/one-way-binding' },
        { title: 'Event Binding', url: '/chapter02/event-binding' },
        { title: 'Two Way Binding', url: '/chapter02/two-way-binding' },
        { title: 'Directive Test', url: '/chapter02/directive-test' },
      ]
    }
  ];

  constructor() {}
}
