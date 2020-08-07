import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Counter } from '../../interfaces/counter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-counter-output-child',
  templateUrl: './counter-output-child.component.html',
  styleUrls: ['./counter-output-child.component.css'],
})
export class CounterOutputChildComponent implements OnInit {
  @Input() counter:Counter;

  constructor() { }

  ngOnInit() {
  }
}
