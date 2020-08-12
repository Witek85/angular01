import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Counter } from '../../interfaces/counter';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COUNTER_CONFIG } from '../../counter-config.token';
import { CounterConfig } from '../../interfaces/counter-config'

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  private config = {};
  specialForm: FormGroup;
  counter: Counter = {
    value: 0
  };

  constructor(@Optional() @Inject(COUNTER_CONFIG) counterConfig: CounterConfig) {
    this.config = counterConfig;
  }

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
