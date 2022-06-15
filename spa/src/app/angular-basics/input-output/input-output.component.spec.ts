import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import Stock from 'src/app/models/stock';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showStockDetails', () => {
    it('should set selectedStock to provided stock', () => {

      // Arrange
      const stock: Stock = {
        id: 1,
        ticker: "IBM",
        price: 123.12,
        holdStock: true
      };

      // Act
      component.showStockDetails(stock);

      // Assert
      expect(component.selectedStock).toEqual(stock);
    });
  });
});
