import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Counter } from '../../interfaces/counter';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  @Input() counter:Counter;
  @ViewChild('counterOutputRef', {static: true}) counterOutputReference:ElementRef;
  @ViewChild('childRef', {static: true}) childReference:ElementRef;

  constructor(private ref: ChangeDetectorRef, private counterService: CounterService) { }

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

  onStartSubscription() {
    this.counterService.startSubscription();
  }

  onStopSubscription() {
    this.counterService.stopSubscription();
  }

  onLogMessage() {
    this.counterService.logMessage();
  }

}
