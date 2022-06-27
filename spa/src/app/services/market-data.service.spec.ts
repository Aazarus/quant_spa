import { IexStockTestData, yahooStockTestData } from 'src/app/tests/test-data';
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
      var actual = service.yahooStock;

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe("iexStock", () => {
    it("should return the value of _iexStock", () => {
      // Arrange
      const expected = service['_iexStock'];

      // Act
      var actual = service.iexStock;

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
});
