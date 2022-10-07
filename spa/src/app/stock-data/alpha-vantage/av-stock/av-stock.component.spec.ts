import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { MarketDataService } from 'src/app/services/market-data.service';
import { AvStockTestData } from 'src/app/tests/test-data';

import { AvStockComponent } from './av-stock.component';

describe('AvStockComponent', () => {
  let component: AvStockComponent;
  let fixture: ComponentFixture<AvStockComponent>;
  let marketDataServiceSpy: jasmine.SpyObj<MarketDataService>;

  beforeEach(waitForAsync(() => {
    const marketDataServiceSpyObj = jasmine.createSpyObj<MarketDataService>('MarketDataService',
      ['getAvEODStock', 'getAvEODStockWithResult'],
      {
        'avStock': AvStockTestData,
      }
    );
    TestBed.configureTestingModule({
      declarations: [AvStockComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: MarketDataService, useValue: marketDataServiceSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AvStockComponent);
    component = fixture.componentInstance;

    marketDataServiceSpy = TestBed.inject(MarketDataService) as jasmine.SpyObj<MarketDataService>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getStock', () => {
    it('should call repository getAvStockWithResult and assign successful result', () => {
      // Arrange
      component.ticker = "IBM";
      component.startDate = "2018-01-01";
      component.endDate = "2018-02-01";
      component.period = "daily";
      spyOn(console, 'log');
      marketDataServiceSpy.getAvEODStockWithResult.and.returnValue(of(AvStockTestData));

      expect(component.stock).toEqual([]);

      // Act
      component.getStock();

      // Assert
      expect(marketDataServiceSpy.getAvEODStockWithResult).toHaveBeenCalled();
      expect(component.stock).toEqual(AvStockTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', async () => {
      // Arrange
      component.ticker = "IBM";
      component.startDate = "2018-01-01";
      component.endDate = "2018-02-01";
      component.period = "daily";
      spyOn(console, 'log');
      marketDataServiceSpy.getAvEODStockWithResult.and.returnValue(throwError(""));

      // Act
      component.getStock();

      // Assert
      expect(marketDataServiceSpy.getAvEODStockWithResult).toHaveBeenCalled();
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
});
