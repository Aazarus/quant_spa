import { AvStockTestData } from 'src/app/tests/test-data';
import { IexStockTestData, yahooStockTestData, IexQuoteTestData } from 'src/app/tests/test-data';
import { environment } from 'src/environments/environment.prod';
import { TestBed } from '@angular/core/testing';
import { MarketDataService } from './market-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('MarketDataService', () => {
  let service: MarketDataService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        {provider: HttpClient, useValue: httpClientSpyObj }
      ]
    });
    service = TestBed.inject(MarketDataService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service['url']).toBe(environment.baseUrl);
  });

  describe("yahooStock", () => {
    it("should return the value of _yahooStock", () => {
      // Arrange
      const expected = service['_yahooStock'];

      // Act
      const actual = service.yahooStock;

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe("iexStock", () => {
    it("should return the value of _iexStock", () => {
      // Arrange
      const expected = service['_iexStock'];

      // Act
      const actual = service.iexStock;

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe('getYahooStock', () => {
    it('should set yahooStock with the result of the call', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(yahooStockTestData));

      // Act
      service.getYahooStock("IBM","2010-01-01","2020-01-01","daily");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/YahooStock/IBM/2010-01-01/2020-01-01/daily");
      expect(service.yahooStock).toEqual(yahooStockTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getYahooStock("IBM","2010-01-01","2020-01-01","daily");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('getYahooStockWithResult', () => {

    it('should call http get with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'get');

      // Act
      service.getYahooStockWithResult("IBM","2010-01-01","2020-01-01","daily");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/YahooStock/IBM/2010-01-01/2020-01-01/daily");
    });
  });

  describe('getIexStock', () => {
    it('should set yahooStock with the result of the call', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(IexStockTestData));

      // Act
      service.getIexStock("IBM","1");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/IexStock/IBM/1");
      expect(service.iexStock).toEqual(IexStockTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getIexStock("IBM","1");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('getIexStockWithResult', () => {

    it('should call http get with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'get');
      const ticker = "IBM";
      const range = "oneMonth"

      // Act
      service.getIexStockWithResult(ticker, range);

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/IexStock/IBM/oneMonth");
    });
  });

  describe('getIexQuote', () => {
    it('should set IexQupte with the result of the call', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(IexQuoteTestData));

      // Act
      service.getIexQuote("IBM");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/IexQuote/IBM");
      expect(service.iexQuote).toEqual(IexQuoteTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getIexQuote("IBM");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('getIexQuoteWithResult', () => {

    it('should call http get with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'get');
      const ticker = "IBM";

      // Act
      service.getIexQuoteWithResult(ticker);

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/IexQuote/IBM");
    });
  });

  describe('getAvStock', () => {
    it('should set avQuote with the result of the call', () => {

      // Arrange
      spyOn(httpClientSpy, 'get').and.returnValue(of(AvStockTestData));

      // Act
      service.getAvEODStock("IBM", "2022-01-01", "2022-08-01", "weekly");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/AvEOD/IBM/2022-01-01/2022-08-01/weekly");
      expect(service.avStock).toEqual(AvStockTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      spyOn(httpClientSpy, 'get').and.returnValue(throwError(""));

      // Act
      service.getAvEODStock("IBM", "2022-01-01", "2022-08-01", "weekly");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('getIexQuoteWithResult', () => {

    it('should call http get with the expected url', () => {

      // Arrange
      spyOn(httpClientSpy, 'get');
      const ticker = "IBM";

      // Act
      service.getAvEODStockWithResult("IBM", "2022-01-01", "2022-08-01", "weekly");

      // Assert
      expect(httpClientSpy.get).toHaveBeenCalledWith("https://localhost:7108/api/AvEOD/IBM/2022-01-01/2022-08-01/weekly");
    });
  });
});
