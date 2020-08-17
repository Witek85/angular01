import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputComponent } from './counter-output.component';
import { CounterOutputChildComponent } from '../counter-output-child/counter-output-child.component';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<CounterOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterOutputComponent, CounterOutputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
