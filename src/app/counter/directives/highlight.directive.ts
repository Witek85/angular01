import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef) {}

  ngOnInit() {
    console.log('dyrektywa', this.elementRef)
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
