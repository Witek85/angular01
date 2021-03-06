import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Counter } from '../../interfaces/counter';
import { CounterConfig } from '../../interfaces/counter-config';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  @Input() config:CounterConfig;
  @Input() counter:Counter;
  @ViewChild('counterOutputRef', {static: true}) counterOutputReference:ElementRef;
  @ViewChild('childRef', {static: true}) childReference:ElementRef;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ViewChild', this.counterOutputReference.nativeElement);
  }

  onReattach() {
    this.ref.reattach();
  }

  onDetach() {
    this.ref.detach();
  }

  onLogReference() {
    console.log('childReference', this.childReference)
  }

}
