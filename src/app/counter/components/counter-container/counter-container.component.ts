import { Component, OnInit } from '@angular/core';
import { Counter } from '../../interfaces/counter';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  specialForm: FormGroup;
  counter: Counter = {
    value: 0
  };

  constructor() { }

  ngOnInit() {
    this.specialForm = new FormGroup({
      specialName: new FormControl('', {
        validators: Validators.required, updateOn: "change"
      }),
      specialCustom: new FormControl('', {
        validators: Validators.required, updateOn: "change"
      })
    })
  }

  onIncrementSet(val) {
    console.log('onIncrementSet ' + val)
    this.counter.value += val;
  }

  onSubmit() {
    console.log('submit', this.specialForm)
  }

}
