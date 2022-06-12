import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { YahooStockTableComponent } from './yahoo-stock-table.component';

describe('YahooStockTableComponent', () => {
  let component: YahooStockTableComponent;
  let fixture: ComponentFixture<YahooStockTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YahooStockTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YahooStockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.marketData).toEqual([]);
  });
});
