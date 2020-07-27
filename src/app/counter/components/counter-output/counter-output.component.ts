import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  @Input() counter;
  @ViewChild('counterOutputRef', {static: true}) counterOutputReference:ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ViewChild', this.counterOutputReference.nativeElement)
  }

}
