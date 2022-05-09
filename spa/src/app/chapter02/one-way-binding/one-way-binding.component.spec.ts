import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import Candle from 'src/app/models/candle';
import { OneWayBindingComponent } from './one-way-binding.component';

describe('OneWayBindingComponent', () => {
  let component: OneWayBindingComponent;
  let fixture: ComponentFixture<OneWayBindingComponent>;
  let candle: Candle = 
  {
    ticker: 'IBM',
    date: new Date('07/14/2015'),
    close: 167.61,
    high: 169.74,
    low: 167.24,
    open: 169.03
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayBindingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getColor', () => {

    it('should return green if provided number is 169 or greater', () => {
      
      // Arrange
      const price = 169.01;
      const expected = 'green';

      // Act
      const actual = component.getColor(price);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return red if provided number is less than 169', () => {
      
      // Arrange
      const price = 168.91;
      const expected = 'red';

      // Act
      const actual = component.getColor(price);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe('avgPrice', () => {
    it('should return the average price of a candle', () => {
      // Arrange
      const expected = 168.405;
      // Act
      const actual = component.avgPrice(candle);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
