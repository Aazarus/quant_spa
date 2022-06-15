import { indexDataTestData, symbolAndPriceTestData } from 'src/app/tests/test-data';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IndexDataComponent } from './index-data.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IndexDataComponent', () => {
  let component: IndexDataComponent;
  let fixture: ComponentFixture<IndexDataComponent>;
  let repoServiceSpy: jasmine.SpyObj<RepositoryService>;

  beforeEach(waitForAsync(() => {
    const repoServiceSpyObj = jasmine.createSpyObj<RepositoryService>('RepositoryService', 
        ["getIndexData"]
      );

    TestBed.configureTestingModule({
      declarations: [ IndexDataComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provider: RepositoryService, useValue: repoServiceSpyObj }
      ]
    }).compileComponents();


    fixture = TestBed.createComponent(IndexDataComponent);
    component = fixture.componentInstance;
    repoServiceSpy = TestBed.inject(RepositoryService) as jasmine.SpyObj<RepositoryService>;    
    repoServiceSpy['_indexData'] = indexDataTestData;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('indexData', () => {
    it('should return indexData from RepositoryService', () => {
      // Arrange
      // Act
      const actual = component.indexData;

      // Assert
      expect(actual).toEqual(indexDataTestData);
    });
  });
});
