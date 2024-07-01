import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlighttext]'
})
export class HighlighttextDirective {

  constructor(private el: ElementRef) { 


  }

  @HostListener('onmouseenter') onMouseEnter() {

    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('onmouseleave') onMouseLeave() {

    this.el.nativeElement.style.backgroundColor = 'purple';
  }

}
