import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputChildComponent } from './counter-output-child.component';

describe('CounterOutputChildComponent', () => {
  let component: CounterOutputChildComponent;
  let fixture: ComponentFixture<TestCounterOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCounterOutputComponent, CounterOutputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCounterOutputComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-counter-output-child',
  template: '<app-counter-output-child [counter]="counter" #childRef></app-counter-output-child>'
})
class TestCounterOutputComponent {
  counter = { value: 5 }
}