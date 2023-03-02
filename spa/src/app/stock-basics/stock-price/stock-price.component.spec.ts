import { symbolAndPriceTestData } from './../../tests/test-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RepositoryService } from 'src/app/services/repository.service';

import { StockPriceComponent } from './stock-price.component';

describe('StockPriceComponent', () => {
  let component: StockPriceComponent;
  let fixture: ComponentFixture<StockPriceComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj<RepositoryService>('RepositoryService',
        ['getStockAndPrice', 'getStockAndPriceWithTicker'],
        {
          'stock': symbolAndPriceTestData[0],
          'stockWithTicker': symbolAndPriceTestData[1]
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

  describe("stock getter", () => {
    it("should return repoService stock value if getWithTicker is false", () => {
      // Arrange
      // Act
      const actual = component.stock;

      // Assert
      expect(actual).toBe(symbolAndPriceTestData[0])
    });

    it("should return repoService stockWithTicker value if getWithTicker is true", () => {
      // Arrange
      const event = {
        index: true
      };
      component.onTabChanged(event);

      // Act
      const actual = component.stock;

      // Assert
      expect(actual).toBe(symbolAndPriceTestData[1])
    });
  });

  describe("getStock", () => {

    it('should call getStockAndPrice if getWithTicker is false', () => {
      // Arrange
      spyOn(component, 'getStockAndPrice').and.returnValue();
      spyOn(component, 'getStockAndPriceWithTicker').and.returnValue();
      expect(component['getWithTicker']).toBeFalsy();

      // Act
      component.getStock();

      // Assert
      expect(component.getStockAndPrice).toHaveBeenCalled();
      expect(component.getStockAndPriceWithTicker).not.toHaveBeenCalled();
    });

    it('should call getStockAndPriceWithTicker if getWithTicker is true', () => {
      // Arrange
      const event = {
        index: true
      };
      component.onTabChanged(event);
      spyOn(component, 'getStockAndPrice').and.returnValue();;
      spyOn(component, 'getStockAndPriceWithTicker').and.returnValue();;
      expect(component['getWithTicker']).toBeTruthy();

      // Act
      component.getStock();

      // Assert
      expect(component.getStockAndPrice).not.toHaveBeenCalled();
      expect(component.getStockAndPriceWithTicker).toHaveBeenCalled();
    });
  });

  describe('getStockAndPrice', () => {
    it('should call repoService passing required arguments', () => {
      // Arrange
      component.stockId = 123;
      component.startDate = "2000-01-01";
      component.endDate = "2001-01-01";

      // Act
      component.getStockAndPrice();

      // Assert
      expect(repoServiceSpy.getStockAndPrice).toHaveBeenCalledWith(123, "2000-01-01", "2001-01-01");
    });
  });

  describe('getStockAndPriceWithTicker', () => {
    it('should call repoService passing required arguments', () => {
      // Arrange
      component.ticker = "IBM";
      component.startDate = "2000-01-01";
      component.endDate = "2001-01-01";

      // Act
      component.getStockAndPriceWithTicker();

      // Assert
      expect(repoServiceSpy.getStockAndPriceWithTicker).toHaveBeenCalledWith("IBM", "2000-01-01", "2001-01-01");
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
