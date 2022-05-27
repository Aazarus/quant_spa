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

  describe("stock getter", () => {
    it("should return repoService stock value if getWithTicker is false", () => {
      // Arrange
      // Act
      var actual = component.stock;

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
      var actual = component.stock;

      // Assert
      expect(actual).toBe(symbolAndPriceTestData[1])
    });
  });

  describe("getStock", () => {

    it('should call getStockAndPrice if getWithTicker is false', () => {
      // Arrange
      spyOn(component, 'getStockAndPrice');
      spyOn(component, 'getStockAndPriceWithTicker');
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
      spyOn(component, 'getStockAndPrice');
      spyOn(component, 'getStockAndPriceWithTicker');
      expect(component['getWithTicker']).toBeTruthy();

      // Act
      component.getStock();

      // Assert
      expect(component.getStockAndPrice).not.toHaveBeenCalled();
      expect(component.getStockAndPriceWithTicker).toHaveBeenCalled();
    });
  })
});
