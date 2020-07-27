import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Output() incrementSet:EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(val: Number) {
    this.incrementSet.emit(val);
  }

}
