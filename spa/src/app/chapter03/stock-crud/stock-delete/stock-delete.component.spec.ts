import { StockDeleteDialogComponent } from './stock-delete-dialog/stock-delete-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { RepositoryService } from 'src/app/services/repository.service';
import { symbolAndPriceTestData } from 'src/app/tests/test-data';
import { StockDeleteComponent } from './stock-delete.component';

describe('StockDeleteComponent', () => {
  let component: StockDeleteComponent;
  let fixture: ComponentFixture<StockDeleteComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj<RepositoryService>('RepositoryService',
      ['deleteStockWithResult', 'getStock'],
      {
        'stock': symbolAndPriceTestData[0]
      });
    TestBed.configureTestingModule({
      declarations: [StockDeleteComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: RepositoryService, useValue: repoServiceSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StockDeleteComponent);
    component = fixture.componentInstance;

    repoServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('stock getter', () => {
    it('should return the stock held by the repo service', () => {
      // Arrange
      // Act
      const actual = component.stock;

      // Assert
      expect(actual).toBe(repoServiceSpy.stock);
    });
  });

  describe('getStock', () => {
    it('should clear isDeleted and call getStock on RepositoryService', () => {
      // Arrange      
      // Act
      component.getStock();

      // Assert
      expect(component.isDeleted).toBeFalsy;
      expect(repoServiceSpy.getStock).toHaveBeenCalledWith(component.stockId);
    });
  });

  describe('deleteStock', () => {
    it('should call deleteStock passing in the Id for the stock to delete', () => {
      // Arrange
      repoServiceSpy.deleteStockWithResult.and.returnValue(of({}));

      // Act
      component.deleteStock();

      // Assert
      expect(repoServiceSpy.deleteStockWithResult).toHaveBeenCalledWith(component.stockId);
      expect(component.isDeleted).toBeTruthy();
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      spyOn(console, 'log');
      repoServiceSpy.deleteStockWithResult.and.returnValue(throwError(""));

      // Act
      component.deleteStock();

      // Assert
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('openDialog', () => {
    it('should call open on dialog passing in the component and config', () => {
      // Arrange
      const result = { 
        afterClosed: () => of({}) 
      } as any;
      spyOn(component['dialog'], 'open')
        .and
        .returnValue(result);
        spyOn(component, 'deleteStock')
          .and.callFake(() => {});

      // Act
      component.openDialog();

      // Assert
      expect(component['dialog'].open).toHaveBeenCalled();
      expect(component.deleteStock).toHaveBeenCalled();
    });
  });
});
