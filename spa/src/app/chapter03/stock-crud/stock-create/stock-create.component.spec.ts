import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StockCreateComponent } from './stock-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';

describe('StockCreateComponent', () => {
  let component: StockCreateComponent;
  let fixture: ComponentFixture<StockCreateComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj<RepositoryService>('RepositoryService', 
        ['createStock']
      );

    TestBed.configureTestingModule({
      declarations: [ StockCreateComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provide: RepositoryService, useValue: repoServiceSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StockCreateComponent);
    component = fixture.componentInstance;

    repoServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createStock', () => {

    it('should create a new symbol object, call repoService to add the new symbol, and clear data', () => {
      // Arrange
      const expected: Symbol = {
        symbolId: 15,
        ticker: "ABC",
        region: "UK",
        sector: "Financials",        
      }
      component.ticker = expected.ticker;
      component.region = expected.region;
      component.sector = expected.sector;
      repoServiceSpy.createStock.and.returnValue(expected);

      // Act
      component.createStock();

      // Assert
      expect(component.stock).toEqual(expected);
    });
  });
});
