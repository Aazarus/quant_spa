import { TestBed } from '@angular/core/testing';

import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStockColor', () => {

    it('should return "red" if key is 1', () => {
      // Arrange
      const expected = 'red';

      // Act
      const actual = service.getStockColor(1);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return "green" if key is 2', () => {
      // Arrange
      const expected = 'green';

      // Act
      const actual = service.getStockColor(2);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return "blue" if key is 3', () => {
      // Arrange
      const expected = 'blue';

      // Act
      const actual = service.getStockColor(3);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return "maroon" if key is 4', () => {
      // Arrange
      const expected = 'maroon';

      // Act
      const actual = service.getStockColor(4);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return "black" if key is 5', () => {
      // Arrange
      const expected = 'black';

      // Act
      const actual = service.getStockColor(5);

      // Assert
      expect(actual).toBe(expected);
    });

    it('should return "pink" if key is not 1,2,3,4,5', () => {
      // Arrange
      const expected = 'pink';

      // Act
      const actual = service.getStockColor(6);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
