import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterCustomInputComponent),
    multi: true
  }]
})
export class CounterCustomInputComponent implements OnInit, ControlValueAccessor {
  public customControl: FormControl;
  public propagateChange: any = () => {};
  public propagateTouched: any = () => {};

  // TODO Make plus minus counter and conditional input in NG_VALUE_ACCESSOR
  // https://medium.com/@vinothinikings/control-value-accessor-in-angular-dfc338ea0f18
  // https://stackblitz.com/github/Vin88/Simple-CVA-Ang8

  constructor() { }

  ngOnInit() {
    this.customControl = new FormControl('', {
      validators: Validators.required, updateOn: "change"
    })
  }

  writeValue(obj: any): void {
    this.customControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

}
