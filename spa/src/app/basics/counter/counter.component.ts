import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public title = 'Counter';

  constructor() { }

  public incrementCounter() {
    this.currentCount++;
  }
}
