import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  // See comment at bottom of file
  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('rgb(255,255,0)');
  }

  // See comment at bottom of file
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

/*
  Depending on the device you will see different behaviours.

  On Mobile:
    You do not have mouse enter and mouse leave for mobile so you will have to press on the element to trigger the behaviour.

  On PC:
    Behaviour will be as expected. Highlights when hovering and removes highlight when hovering stops.
*/