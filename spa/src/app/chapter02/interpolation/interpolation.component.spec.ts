import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import Candle from 'src/app/models/candle';
import { CandleService } from 'src/app/services/candle.service';

import { InterpolationComponent } from './interpolation.component';

describe('InterpolationComponent', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;
  let candleServiceObj: jasmine.SpyObj<CandleService>;
  let candles: Candle[] = [
    {
      ticker: 'IBM',
      date: new Date('07/14/2015'),
      close: 168.61,
      high: 169.54,
      low: 168.24,
      open: 169.43
    },
    {
      ticker: 'AAP',
      date: new Date('07/14/2015'),
      close: 167.61,
      high: 169.74,
      low: 167.24,
      open: 169.03
    },
  ];

  beforeEach(waitForAsync(() => {
    let candleServiceSpyObj = jasmine.createSpyObj('CandleService', ['']);

    TestBed.configureTestingModule({
      declarations: [ InterpolationComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: CandleService, useValue: candleServiceSpyObj }
      ]
    }).compileComponents();

    candleServiceObj = TestBed.inject(CandleService) as jasmine.SpyObj<CandleService>;

    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.candles).toEqual(candles);
  });
});
