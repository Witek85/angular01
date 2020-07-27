import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  counter: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  onIncrementSet(val) {
    console.log('onIncrementSet ' + val)
    this.counter += val;
  }

}
