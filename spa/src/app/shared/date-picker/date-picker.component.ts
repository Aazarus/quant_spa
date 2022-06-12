import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {

  @Input() public label: string = 'Please select a date';
  @Output() public selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  public dateSelected(event: MatDatepickerInputEvent<Moment>): void {
    const date = moment(event.value).format("YYYY-MM-DD");
    this.selected.emit(date);    
  }
}
