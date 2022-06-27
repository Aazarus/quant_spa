import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { MarketDataService } from 'src/app/services/market-data.service';
import { RepositoryService } from 'src/app/services/repository.service';
import { yahooStockTestData } from 'src/app/tests/test-data';

import { YahooStockSaveComponent } from './yahoo-stock-save.component';

describe('YahooStockSaveComponent', () => {
  let component: YahooStockSaveComponent;
  let fixture: ComponentFixture<YahooStockSaveComponent>;
  let marketDataServiceSpy: jasmine.SpyObj<MarketDataService>;
  let repositoryServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const marketDataServiceSpyObj = jasmine.createSpyObj<MarketDataService>('MarketDataService',
      ['getYahooStock', 'getYahooStockWithResult'],
      {
        'yahooStock': yahooStockTestData,
      }
    );
    const repositoryServiceSpyObj = jasmine.createSpyObj<RepositoryService>('RepositoryService', ['addStockPriceWithResult']);

    TestBed.configureTestingModule({
      declarations: [YahooStockSaveComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: MarketDataService, useValue: marketDataServiceSpyObj },
        { provide: RepositoryService, useValue: repositoryServiceSpyObj }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(YahooStockSaveComponent);
    component = fixture.componentInstance;
    
    marketDataServiceSpy = TestBed.inject(MarketDataService) as jasmine.SpyObj<MarketDataService>;
    repositoryServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getStock', () => {
    it('should call repository getYahooStockWithResult and assign successful result', async () => {
      // Arrange
      component.ticker = "IBM";
      component.startDate = "2018-01-01";
      component.endDate = "2018-02-01";
      component.period = "daily";
      spyOn(console, 'log');
      marketDataServiceSpy.getYahooStockWithResult.and.returnValue(of(yahooStockTestData));

      expect(component.marketData).toEqual([]);

      // Act
      await component.getStock();

      // Assert
      expect(marketDataServiceSpy.getYahooStockWithResult).toHaveBeenCalled();
      expect(component.marketData).toEqual(yahooStockTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', async () => {
      // Arrange
      component.ticker = "IBM";
      component.startDate = "2018-01-01";
      component.endDate = "2018-02-01";
      component.period = "daily";
      spyOn(console, 'log');
      marketDataServiceSpy.getYahooStockWithResult.and.returnValue(throwError(""));

      // Act
      await component.getStock();

      // Assert
      expect(marketDataServiceSpy.getYahooStockWithResult).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('startDateSelected', () => {
    it('should set the startDate to the provided argument', () => {
      // Arrange
      component.startDate = "";
      const newStartDate = "2001-01-01";

      expect(component.startDate).toBe("");

      // Act
      component.startDateSelected(newStartDate);

      // Assert
      expect(component.startDate).toBe(newStartDate);
    });
  });

  describe('endDateSelected', () => {
    it('should set the endDate to the provided argument', () => {
      // Arrange
      component.endDate = "";
      const newEndDate = "2001-01-01";

      expect(component.endDate).toBe("");

      // Act
      component.endDateSelected(newEndDate);

      // Assert
      expect(component.endDate).toBe(newEndDate);
    });
  });

  describe('saveStock', () => {

    it('should set isSaved to true when valid result returned', async () => {
      // Arrange
      spyOn(console, 'log');
      repositoryServiceSpy.addStockPriceWithResult.and.returnValue(of(yahooStockTestData));

      expect(component.isSaved).toBeFalsy();

      // Act
      await component.saveStock();

      // Assert
      expect(repositoryServiceSpy.addStockPriceWithResult).toHaveBeenCalled();
      expect(component.isSaved).toBeTruthy();

    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', async () => {
      // Arrange
      spyOn(console, 'log');
      repositoryServiceSpy.addStockPriceWithResult.and.returnValue(throwError(""));

      // Act
      await component.saveStock();

      // Assert
      expect(repositoryServiceSpy.addStockPriceWithResult).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });

  });
});
