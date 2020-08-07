import { Component, OnInit } from '@angular/core';
import { Counter } from '../../interfaces/counter';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  counter: Counter = {
    value: 0
  };

  constructor() { }

  ngOnInit() {
  }

  onIncrementSet(val) {
    console.log('onIncrementSet ' + val)
    this.counter.value += val;
  }

}
