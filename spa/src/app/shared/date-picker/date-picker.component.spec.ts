import { Moment } from 'moment';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatePickerComponent } from './date-picker.component';
import * as moment from 'moment';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('dateSelected', () => {
    it('should assign the date to the provided event value', () => {

      // Arrange
      spyOn(component.selected, 'emit');
      const date = moment();
      const dateFormatted = moment(date).format("YYYY-MM-DD");
      const event: any = { value: date};

      // Act
      component.dateSelected(event);

      // Assert
      expect(component.selected.emit).toHaveBeenCalledWith(dateFormatted);
    });
  });
});
