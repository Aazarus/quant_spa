import { TestBed } from '@angular/core/testing';
import Candle from 'src/app/models/candle';
import { CandleService } from './candle.service';

describe('CandleService', () => {
  let service: CandleService;
  let candle: Candle = 
  {
    ticker: 'IBM',
    date: new Date('07/14/2015'),
    close: 167.61,
    high: 169.74,
    low: 167.24,
    open: 169.03
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getColor', () => {

    it('should return green if provided number is 169 or greater', () => {
      
      // Arrange
      const price = 169.01;
      const expected = 'green';

      // Act
      const actual = service.getColor(price);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return red if provided number is less than 169', () => {
      
      // Arrange
      const price = 168.91;
      const expected = 'red';

      // Act
      const actual = service.getColor(price);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe('avgPrice', () => {
    it('should return the average price of a candle', () => {
      // Arrange
      const expected = 168.405;
      // Act
      const actual = service.avgPrice(candle);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
