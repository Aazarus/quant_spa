import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {

  @Input() public label: string = 'Please select a date';
  @Output() public selected = new EventEmitter<string>();

  constructor() { }

  public dateSelected(event: MatDatepickerInputEvent<Moment>): void {
    var date = moment(event.value).format("YYYY-MM-DD");
    if (date.toLocaleLowerCase().includes("invalid")){
      date = "";
    }

    this.selected.emit(date);
  }
}
