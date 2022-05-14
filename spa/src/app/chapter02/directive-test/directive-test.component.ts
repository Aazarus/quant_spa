import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss'],
})
export class DirectiveTestComponent implements OnInit {

  public title: string = "Directive Test";

  constructor() { }

  ngOnInit() {}

}
