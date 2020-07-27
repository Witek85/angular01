import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter-template',
  templateUrl: './counter-template.component.html',
  styleUrls: ['./counter-template.component.css']
})
export class CounterTemplateComponent implements OnInit {
  @ContentChild('contentRef', {static: true}) contentReference:ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ContentChild', this.contentReference.nativeElement);
  }

}
