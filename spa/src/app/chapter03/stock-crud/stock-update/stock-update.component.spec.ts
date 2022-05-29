import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RepositoryService } from 'src/app/services/repository.service';
import { StockUpdateComponent } from './stock-update.component';
import { symbolAndPriceTestData } from 'src/app/tests/test-data';
import { of, throwError } from 'rxjs';

describe('StockUpdateComponent', () => {
  let component: StockUpdateComponent;
  let fixture: ComponentFixture<StockUpdateComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj<RepositoryService>('RepositoryService', 
        ['getStockWithResult', 'updateStockWithResult'], 
        {
          'stock': symbolAndPriceTestData[0],
          'stockWithTicker': symbolAndPriceTestData[1]
        }
      );
      
    TestBed.configureTestingModule({
      declarations: [ StockUpdateComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provide: RepositoryService, useValue: repoServiceSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StockUpdateComponent);
    component = fixture.componentInstance;

    repoServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('symbol', () => {
    it('should return the stock held by the RepositoryService', () => {
      // Arrange
      // Act
      const actual = component.symbol;

      // Assert
      expect(actual).toEqual(symbolAndPriceTestData[0])      
    });
  });

  describe('getStock', () => {

    it('should set symbol to null and call getStock on RepositoryService', () => {
      // Arrange
      repoServiceSpy.getStockWithResult.and.returnValue(of(symbolAndPriceTestData[1]));
      component['symbol'] = symbolAndPriceTestData[1];

      // Act
      component.getStock();

      // Assert
      expect(repoServiceSpy.getStockWithResult).toHaveBeenCalled();
    });
    
    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      repoServiceSpy.getStockWithResult.and.returnValue(throwError(""));

      // Act
      component.getStock();

      // Assert
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('updateStock', () => {
    it('should call updateStock passing in the updated symbol', () => {
      // Arrange
      repoServiceSpy.updateStockWithResult.and.returnValue(of(symbolAndPriceTestData[1]));
      component.symbol.ticker = "XYZ";
      component.symbol.region = "UK";
      const expected = component.symbol;

      // Act
      component.updateStock();

      // Assert
      expect(repoServiceSpy.updateStockWithResult).toHaveBeenCalledWith(expected);
    });
    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      repoServiceSpy.updateStockWithResult.and.returnValue(throwError(""));

      // Act
      component.updateStock();

      // Assert
      expect(console.log).toHaveBeenCalled();
    });
  });
});
