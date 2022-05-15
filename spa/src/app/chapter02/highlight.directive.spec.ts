import { MockElementRef } from './../tests/mocks/mock-element-ref';
import { ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';


describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let mockElement = document.createElement('div');
  let mockElementRef: MockElementRef;
  const backgroundColor = 'white';

  beforeEach(waitForAsync(() => {
    mockElement.style.backgroundColor = backgroundColor;
    mockElementRef = new MockElementRef(mockElement);
    TestBed.configureTestingModule({
      declarations: [ HighlightDirective ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();

    directive = new HighlightDirective(mockElementRef);
  }));
  

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
    expect(directive['el']['nativeElement']['style']['backgroundColor']).toBe(backgroundColor);
  });

  describe('onMouseEnter', () => {
    it('should call highlight passing in a color ', () => {
      // Arrange
      const expected = 'rgb(255, 255, 0)';

      // Act
      directive.onMouseEnter();

      // Assert
      expect(directive['el']['nativeElement']['style']['backgroundColor']).toBe(expected);
    });
  });

  describe('onMouseLeave', () => {
    it('should call highlight passing in a color ', () => {
      // Arrange
      const expected: string = '';

      // Act
      directive.onMouseLeave();

      // Assert
      expect(directive['el']['nativeElement']['style']['backgroundColor']).toEqual(expected);
    });
  });
});
