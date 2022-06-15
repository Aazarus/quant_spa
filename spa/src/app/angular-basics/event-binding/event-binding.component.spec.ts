import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventBindingComponent } from './event-binding.component';

describe('EventBindingComponent', () => {
  let component: EventBindingComponent;
  let fixture: ComponentFixture<EventBindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setBackgroundColor', () => {

    it('should set background color to grey if its white', () => {
      // Arrange
      component.bgColor = 'white';

      // Act
      component.setBackgroundColor();

      // Assert
      expect(component.bgColor).toBe('grey');
    });

    it('should set background color to white if its grey', () => {
      // Arrange
      component.bgColor = 'grey';

      // Act
      component.setBackgroundColor();

      // Assert
      expect(component.bgColor).toBe('white');
    });
  });
});
