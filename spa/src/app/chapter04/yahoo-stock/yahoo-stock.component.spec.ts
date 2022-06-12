import { MarketDataService } from './../../services/market-data.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YahooStockComponent } from './yahoo-stock.component';
import { yahooStockTestData } from 'src/app/tests/test-data';
import { of, throwError } from 'rxjs';

describe('YahooStockComponent', () => {
  let component: YahooStockComponent;
  let fixture: ComponentFixture<YahooStockComponent>;
  let marketDataServiceSpy: jasmine.SpyObj<MarketDataService>;

  beforeEach(waitForAsync(() => {
    const marketDataServiceSpyObj = jasmine.createSpyObj<MarketDataService>('MarketDataService',
      ['getYahooStock', 'getYahooStockWithResult'],
      {
        'yahooStock': yahooStockTestData,
      }
    );
    TestBed.configureTestingModule({
      declarations: [YahooStockComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: MarketDataService, useValue: marketDataServiceSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(YahooStockComponent);
    component = fixture.componentInstance;

    marketDataServiceSpy = TestBed.inject(MarketDataService) as jasmine.SpyObj<MarketDataService>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.marketData).toEqual([]);
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
});
