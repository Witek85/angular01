import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Counter } from '../../interfaces/counter';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  @Input() counter:Counter;
  @ViewChild('counterOutputRef', {static: true}) counterOutputReference:ElementRef;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ViewChild', this.counterOutputReference.nativeElement)
  }

  onReattach() {
    this.ref.reattach();
  }

  onDetach() {
    this.ref.detach();
  }

}
