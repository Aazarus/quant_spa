import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import Candle from 'src/app/models/candle';

import { InterpolationComponent } from './interpolation.component';

describe('InterpolationComponent', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;
  let candles: Candle[] = [
    {
      ticker: 'IBM',
      date: new Date('07/14/2015'),
      close: 168.61,
      high: 169.54,
      low: 168.24,
      open: 169.43
    },
    {
      ticker: 'AAP',
      date: new Date('07/14/2015'),
      close: 167.61,
      high: 169.74,
      low: 167.24,
      open: 169.03
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.candles).toEqual(candles);
  });

  describe('avgPrice', () => {
    it('should return the average price of a candle', () => {
      // Arrange
      const expected = 168.405;
      // Act
      const actual = component.avgPrice(candles[1]);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
