import { symbolTestData, symbolAndPriceTestData } from './../../tests/test-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RepositoryService } from 'src/app/services/repository.service';

import { StockPriceComponent } from './stock-price.component';
import { Symbol } from 'src/app/models/symbol';

describe('StockPriceComponent', () => {
  let component: StockPriceComponent;
  let fixture: ComponentFixture<StockPriceComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj('RepositoryService', 
        ['getStockAndPrice', 'getStockAndPriceWithTicker'], 
        {
          'stock': symbolTestData[0],
          'stockWithTicker': symbolTestData[1]
        }
      );

    TestBed.configureTestingModule({
      declarations: [StockPriceComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        {provide: RepositoryService, useValue: repoServiceSpyObj}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StockPriceComponent);
    component = fixture.componentInstance;

    repoServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBe("Stock Price");
  });

  describe('ngOnInit', () => {
    it('should call getStockAndPrice and getStockAndPriceWithTicker', () => {
      // Arrange
      spyOn(component, 'getStockAndPrice');
      spyOn(component, 'getStockAndPriceWithTicker');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.getStockAndPrice).toHaveBeenCalled();
      expect(component.getStockAndPriceWithTicker).toHaveBeenCalled();
    });
  });

  describe('stock getter', () => {
    it('should return the stock held by the RepositoryService', () => {
      // Arrange
      const expected: Symbol = symbolTestData[0];

      // Act
      var actual = component.stock;

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe('stockWithTicker getter', () => {
    it('should return the stock held by the RepositoryService', () => {
      // Arrange
      const expected: Symbol = symbolTestData[1];

      // Act
      var actual = component.stockWithTicker;

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe('getStockAndPrice', () => {
    it('should call getStockAndPrice on the RepositoryService ', () => {
      // Arrange
      const symbolId = 1;
      const startDate = "2018-01-01";
      const endDate = "2018-03-01";

      // Act
      component.getStockAndPrice(symbolId, startDate, endDate);

      // Assert
      expect(repoServiceSpy.getStockAndPrice).toHaveBeenCalledWith(symbolId, startDate, endDate);
    });
  });

  describe('getStockAndPriceWithTicker', () => {
    it('should call getStockAndPrice on the RepositoryService ', () => {
      // Arrange
      const ticker = "IBM";
      const startDate = "2018-01-01";
      const endDate = "2018-03-01";

      // Act
      component.getStockAndPriceWithTicker(ticker, startDate, endDate);

      // Assert
      expect(repoServiceSpy.getStockAndPriceWithTicker).toHaveBeenCalledWith(ticker, startDate, endDate);
    });
  });
});
