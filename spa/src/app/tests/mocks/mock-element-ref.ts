import { ElementRef } from "@angular/core";

export class MockElementRef<T=any> extends ElementRef {
  constructor(public nativeElement: T) {
      super(nativeElement);
  }
}