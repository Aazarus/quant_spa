import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import Stock from 'src/app/models/stock';

import { StockListComponent } from './stock-list.component';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StockListComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('stockSelected', () => {

    it('should emit the provided stock', () => {
      // Arrange
      spyOn(component.selected, 'emit');
      const stock: Stock = {
        id: 1,
        ticker: "IBM",
        price: 123.12,
        holdStock: true
      };

      // Act
      component.stockSelected(stock);

      // Assert
      expect(component.selected.emit).toHaveBeenCalledWith(stock);
    });
  });
});
