import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import Candle from 'src/app/models/candle';
import { CandleService } from 'src/app/services/candle.service';
import { OneWayBindingComponent } from './one-way-binding.component';

describe('OneWayBindingComponent', () => {
  let component: OneWayBindingComponent;
  let fixture: ComponentFixture<OneWayBindingComponent>;
  let candleServiceObj: jasmine.SpyObj<CandleService>;

  beforeEach(waitForAsync(() => {
  let candleServiceSpyObj = jasmine.createSpyObj('CandleService', ['getColor', 'avgPrice']);

    TestBed.configureTestingModule({
      declarations: [ OneWayBindingComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: CandleService, useValue: candleServiceSpyObj }
      ]
    }).compileComponents();

    candleServiceObj = TestBed.inject(CandleService) as jasmine.SpyObj<CandleService>;

    fixture = TestBed.createComponent(OneWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
