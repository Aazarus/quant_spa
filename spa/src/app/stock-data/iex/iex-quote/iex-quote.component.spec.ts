import { IexQuoteTestData } from 'src/app/tests/test-data';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MarketDataService } from 'src/app/services/market-data.service';
import { IexQuoteComponent } from './iex-quote.component';
import { of, throwError } from 'rxjs';

describe('IexQuoteComponent', () => {
  let component: IexQuoteComponent;
  let fixture: ComponentFixture<IexQuoteComponent>;
  let marketRepoServiceSpy: jasmine.SpyObj<MarketDataService>;

  beforeEach(waitForAsync(() => {
    const marketRepoSpyObj = jasmine.createSpyObj('MarketDataService', ['getIexQuoteWithResult']);
    TestBed.configureTestingModule({
      declarations: [ IexQuoteComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: MarketDataService, useValue: marketRepoSpyObj }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(IexQuoteComponent);
    component = fixture.componentInstance;

    marketRepoServiceSpy = TestBed.inject(MarketDataService) as jasmine.SpyObj<MarketDataService>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.data).toBeNull();
    expect(component.ticker).toBe('');
  });

  describe('data', () => {

    it('should initially return null', () => {

      // Arrange
      // Act
      var actual = component.data;

      // Assert
      expect(actual).toBeNull();
    });

    it('should be a getter for _data', () => {

      // Arrange
      expect(component.data).toBeNull();
      component['_data'] = IexQuoteTestData;
      // Act
      var actual = component.data;

      // Assert
      expect(actual).toBe(IexQuoteTestData);
    });
  });

  describe('getQuote', () => {
    it('should call repository getIexStock and assign successful result', () => {
      // Arrange
      component.ticker = "IBM";
      spyOn(console, 'log');
      marketRepoServiceSpy.getIexQuoteWithResult.and.returnValue(of(IexQuoteTestData));

      // ActIexQuoteTestData
      component.getQuote();

      // Assert
      expect(marketRepoServiceSpy.getIexQuoteWithResult).toHaveBeenCalled();
      expect(component.data).toEqual(IexQuoteTestData);
    });

    // This can be improved to log the error to a third party service for monitoring
    it('should console.log error', () => {
      // Arrange
      component.ticker = "IBM";
      spyOn(console, 'log');
      marketRepoServiceSpy.getIexQuoteWithResult.and.returnValue(throwError(""));

      // Act
      component.getQuote();

      // Assert
      expect(marketRepoServiceSpy.getIexQuoteWithResult).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
    });
  });
});
