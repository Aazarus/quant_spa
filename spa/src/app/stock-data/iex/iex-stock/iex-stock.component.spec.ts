import { IexStockTestData } from 'src/app/tests/test-data';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MarketDataService } from 'src/app/services/market-data.service';

import { IexStockComponent } from './iex-stock.component';
import { of, throwError } from 'rxjs';

describe('IexStockComponent', () => {
  let component: IexStockComponent;
  let fixture: ComponentFixture<IexStockComponent>;
  let marketRepoServiceSpy: jasmine.SpyObj<MarketDataService>;

  beforeEach(waitForAsync(() => {
    const marketRepoSpyObj = jasmine.createSpyObj('MarketDataService', ['getIexStockWithResult']);

    TestBed.configureTestingModule({
      declarations: [IexStockComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: MarketDataService, useValue: marketRepoSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IexStockComponent);
    component = fixture.componentInstance;

    marketRepoServiceSpy = TestBed.inject(MarketDataService) as jasmine.SpyObj<MarketDataService>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get stock', () => {

    it('should return the private field value', () => {

      // Arrange
      expect(component['_marketData']).toEqual([]);
      component['_marketData'] = IexStockTestData;
      expect(component['_marketData']).toEqual(IexStockTestData);

      // Act
      const actual = component.stock;

      // Assert
      expect(actual).toEqual(IexStockTestData);
    });
  });

  describe('getStock', () => {
    it('should call repository getIexStock and assign successful result', () => {
      // Arrange
      component.ticker = "IBM";
      component.range = "oneMonth";
      spyOn(console, 'log');
      marketRepoServiceSpy.getIexStockWithResult.and.returnValue(of(IexStockTestData));

      expect(component.stock).toEqual([]);

      // Act
      component.getStock();

      // Assert
      expect(marketRepoServiceSpy.getIexStockWithResult).toHaveBeenCalled();
      expect(component.stock).toEqual(IexStockTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      component.ticker = "IBM";
      component.range = "oneMonth";
      spyOn(console, 'log');
      marketRepoServiceSpy.getIexStockWithResult.and.returnValue(throwError(""));

      // Act
      component.getStock();

      // Assert
      expect(marketRepoServiceSpy.getIexStockWithResult).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });
});
