import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputChildComponent } from './counter-output-child.component';

describe('CounterOutputChildComponent', () => {
  let component: CounterOutputChildComponent;
  let fixture: ComponentFixture<CounterOutputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterOutputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
