import { defaultStocks } from 'src/app/models/stock';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DirectiveTestComponent } from './directive-test.component';

describe('DirectiveTestComponent', () => {
  let component: DirectiveTestComponent;
  let fixture: ComponentFixture<DirectiveTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveTestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.stocks).toEqual(defaultStocks())
  });

  describe('getStock', () => {

    it('should return the stock of a given id', () => {

      // Arrange
      const id = component.stocks[1].id;
      const expected = component.stocks[1];

      // Act
      const actual = component.getStock(id);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
