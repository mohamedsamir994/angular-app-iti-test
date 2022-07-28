import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBG]',
})
export class ChangeBGDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = 'burlywood';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.backgroundColor = 'white';
  }
  constructor(private ele: ElementRef) {
    // ele.nativeElement.style.backgroundColor = 'red';
  }
}
