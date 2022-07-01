import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StockTableComponent } from './stock-table.component';

describe('StockTableComponent', () => {
  let component: StockTableComponent;
  let fixture: ComponentFixture<StockTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StockTableComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.marketData).toEqual([]);
  });

  describe('ngOnInit', () => {

    describe('true (default) Input includeCloseAdj value', () => {
      it('should include CloseAdj in displayedcols if includeCloseAdj is true (default)', () => {
        // Arrange
        // Act
        // Assert
        expect(component.displayedCols).toEqual(['date', 'open', 'high', 'low', 'close', 'closeAdj', 'volume']);
      });
    });

    describe('false Input includeCloseAdj value', () => {
      
      beforeEach(() => {
        fixture = TestBed.createComponent(StockTableComponent);
        component = fixture.componentInstance;
        component.includeCloseAdj = false;
        fixture.detectChanges();
      });

      it('should not include CloseAdj in displayedcols if includeCloseAdj is true', () => {
        // Arrange
        expect(component.includeCloseAdj).toBeFalsy();

        // Act
        // Assert
        expect(component.displayedCols).toEqual(['date', 'open', 'high', 'low', 'close', 'volume']);   
      });
    });
  });
});
