import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string = 'white';

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {}

  ngOnInit() {
    console.log('dyrektywa', this.elementRef)
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid green');
    // another way
    this.background = 'blue'
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid red');
    // another way
    this.background = 'white'
  }

}
