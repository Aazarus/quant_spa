import { IndexData } from 'src/app/models/index-data';
import { indexDataTestData, yahooStockTestData } from 'src/app/tests/test-data';
import { environment } from 'src/environments/environment.prod';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RepositoryService } from './repository.service';
import { HttpClient } from '@angular/common/http';
import { symbolAndPriceTestData } from 'src/app/tests/test-data';
import { of, throwError } from 'rxjs';
import { Symbol } from 'src/app/models/symbol';
import { symbolPutTestData, symbolTestData } from 'src/app/tests/test-data';

describe('RepositoryService', () => {
  let service: RepositoryService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provider: HttpClient, useValue: httpClientSpyObj }
      ]
    });
    service = TestBed.inject(RepositoryService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service['url']).toBe(environment.baseUrl);
  });

  describe('prices', () => {

    it('should return the available prices', () => {
      // Arrange
      // Act
      const actual = service.prices;

      // Assert
      expect(actual).toEqual([]);
    });
  });

  describe('getStocks', () => {

    it('should get the collection of stocks and set locally.', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(symbolTestData));

      // Act
      service.getStocks();

      // Assert
      expect(service['stocks']).not.toBeNull();
      expect(service['stocks']).toEqual(symbolTestData as any);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getStocks();

      // Assert
      expect(service['stocks']).toEqual([]);
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('getStock', () => {

    it('should get a single stock by id and set locally.', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(symbolTestData[0]));

      // Act
      service.getStock(symbolTestData[0].symbolId);

      // Assert
      expect(service['stock']).not.toBeNull();
      expect(service['stock']).toEqual(symbolTestData[0] as Symbol);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getStock(symbolTestData[0].symbolId);

      // Assert
      expect(service['stocks']).toEqual([]);
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('getStockWithResult', () => {

    it('should call http get with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'get');

      // Act
      service.getStockWithResult(symbolTestData[0].symbolId);

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/stocks/1");
    });
  });

  describe('getStockWithTicker', () => {

    it('should get a single stock by id and set locally.', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(symbolTestData[0]));

      // Act
      service.getStockWithTicker(symbolTestData[0].ticker);

      // Assert
      expect(service['stockWithTicker']).not.toBeNull();
      expect(service['stockWithTicker']).toEqual(symbolTestData[0] as Symbol);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getStockWithTicker(symbolTestData[0].ticker);

      // Assert
      expect(service['stockWithTicker']).toBeNull();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe("getStockAndPriceWithTicker", () => {
    it ("should get a single stock by ticker with prices for a given date period and set locally", () => {
      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(symbolAndPriceTestData[0]));
      const start = "2017-11-07";
      const end = "2017-11-09";

      // Act
      service.getStockAndPriceWithTicker(symbolAndPriceTestData[0].ticker, start, end);

      // Assert
      expect(service['stockWithTicker']).not.toBeNull();
      expect(service['stockWithTicker']).toEqual(symbolAndPriceTestData[0] as Symbol);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));
      const start = "2017-11-07";
      const end = "2017-11-09";

      // Act
      service.getStockAndPriceWithTicker(symbolAndPriceTestData[0].ticker, start, end);

      // Assert
      expect(service['stockWithTicker']).toBeNull();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe("getStockAndPrice", () => {
    it ("should get a single stock by id with prices for a given date period and set locally", () => {
      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(symbolAndPriceTestData[0]));
      const start = "2017-11-07";
      const end = "2017-11-09";

      // Act
      service.getStockAndPrice(symbolAndPriceTestData[0].symbolId, start, end);

      // Assert
      expect(service['stock']).not.toBeNull();
      expect(service['stock']).toEqual(symbolAndPriceTestData[0] as Symbol);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));
      const start = "2017-11-07";
      const end = "2017-11-09";

      // Act
      service.getStockAndPrice(symbolAndPriceTestData[0].symbolId, start, end);

      // Assert
      expect(service['stock']).toBeNull();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe("getIndexData", () => {
    it ("should get the collection of Index Data and set locally", () => {
      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(indexDataTestData));

      // Act
      service.getIndexData();

      // Assert
      expect(service['indexData']).not.toBeNull();
      expect(service['indexData']).toEqual(indexDataTestData as IndexData[]);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getIndexData();

      // Assert
      expect(service['indexData']).toEqual([]);
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe("getIndexDataPeriod", () => {
    it ("should get the collection of Index Data and set locally", () => {
      // Arrange
      const expected = [indexDataTestData[0], indexDataTestData[1], indexDataTestData[2]]
      spyOn(httpClientSpy, 'get').and.returnValue(of(expected));
      const start = "2008-03-10";
      const end = "2008-03-12";

      // Act
      service.getIndexDataPeriod(start, end);

      // Assert
      expect(service['indexData']).not.toBeNull();
      expect(service['indexData']).toEqual(expected);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));
      const start = "2008-03-10";
      const end = "2008-03-12";

      // Act
      service.getIndexDataPeriod(start, end);

      // Assert
      expect(service['indexData']).toEqual([]);
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('createStock', () => {

    it('should post new stock and add to collection', () => {
      // Arrange
      const newId = 10;
      let stock: Symbol = {
        ticker: 'NEW',
        region: 'UK',
        sector: 'Financials',
      };
      spyOn(httpClientSpy, 'post').and.returnValue(of(newId));

      // Act
      const result = service.createStock(stock);

      // Assert
      expect(httpClientSpy.post).toHaveBeenCalled();
      expect(result).toEqual(stock);
      stock.symbolId = newId;
      const newStock = service['stocks'][service['stocks'].length-1];
      expect(newStock).toEqual(stock);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      const stockCount = service['stocks'].length;
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'post').and.returnValue(throwError(""));
      let stock: Symbol = {
        ticker: 'NEW',
        region: 'UK',
        sector: 'Financials',
      };

      // Act
      service.createStock(stock);

      // Assert
      expect(console.log).toHaveBeenCalled();
      expect(service['stocks'].length).toBe(stockCount);
    });
  });

  describe('updateStock', () => {

    it('should put updated stock and call getStocks', () => {
      // Arrange
      spyOn(service, 'getStocks');
      spyOn(httpClientSpy, 'put').and.returnValue(of(""));
      let stock: Symbol = symbolTestData[2];
      stock.sector="Information Technology";

      // Act
      service.updateStock(stock);

      // Assert
      expect(httpClientSpy.put).toHaveBeenCalled();
      expect(service['getStocks']).toHaveBeenCalled();
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'put').and.returnValue(throwError(""));
      let stock: Symbol = {
        ticker: 'NEW',
        region: 'UK',
        sector: 'Financials',
      };

      // Act
      service.updateStock(stock);

      // Assert
      expect(httpClientSpy.put).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('updateStockWithResult', () => {

    it('should call http put with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'put');

      // Act
      service.updateStockWithResult(symbolTestData[0]);

      // Assert
      expect(httpClientSpy.put).toHaveBeenCalledWith("https://localhost:7108/api/stocks/1", symbolTestData[0]);
    });
  });

  describe('deleteStock', () => {

    it('should call delete with stock id and call getStocks', () => {
      // Arrange
      spyOn(service, 'getStocks');
      spyOn(httpClientSpy, 'delete').and.returnValue(of(""));
      let stockId: number = symbolTestData[0].symbolId;

      // Act
      service.deleteStock(stockId);

      // Assert
      expect(httpClientSpy.delete).toHaveBeenCalled();
      expect(service.getStocks).toHaveBeenCalled();
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'delete').and.returnValue(throwError(""));
      let stockId: number = symbolTestData[0].symbolId;

      // Act
      service.deleteStock(stockId);

      // Assert
      expect(httpClientSpy.delete).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('deleteStockWithResult', () => {

    it('should call http get with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'delete');

      // Act
      service.deleteStockWithResult(symbolTestData[0].symbolId);

      // Assert
      expect(httpClientSpy.delete).toHaveBeenCalledWith('https://localhost:7108/api/stocks/1');
    });
  });

  describe('addStockPriceWithResult', () => {
    it('should call http post with the expected url and data', () => {

      // Arrange
      spyOn(httpClientSpy, 'post');
      const data = yahooStockTestData

      // Act
      service.addStockPriceWithResult(data);

      // Assert
      expect(httpClientSpy.post).toHaveBeenCalledWith('https://localhost:7108/api/stocks/add-stock-price', data);
    });
  })
});
