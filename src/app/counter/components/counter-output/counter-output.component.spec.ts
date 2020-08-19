import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputComponent } from './counter-output.component';
import { CounterOutputChildComponent } from '../counter-output-child/counter-output-child.component';
import { Component } from '@angular/core';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWrapperComponent, CounterOutputComponent, CounterOutputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-wrapper',
  template: '<app-counter-output-child [counter]="counter"></app-counter-output-child>'
})
class TestWrapperComponent {
  counter = { value: 5 }
}
