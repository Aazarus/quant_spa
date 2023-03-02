import { symbolTestData } from 'src/app/tests/test-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RepositoryService } from 'src/app/services/repository.service';
import { AllStocksComponent } from './all-stocks.component';

describe('AllStocksComponent', () => {
  let component: AllStocksComponent;
  let fixture: ComponentFixture<AllStocksComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj(RepositoryService, ['']);
    TestBed.configureTestingModule({
      declarations: [ AllStocksComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provider: RepositoryService, useValue: repoServiceSpyObj }
      ]
    }).compileComponents();

    repoServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;

    fixture = TestBed.createComponent(AllStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('stocks', () => {
    it('should get the collection of stocks from the repository service', () => {
      // Arrange
      repoServiceSpy['_stocks'] = symbolTestData;

      // Act
      const actual = component.stocks;

      // Assert
      expect(actual).toEqual(symbolTestData);
    });
  });
});
