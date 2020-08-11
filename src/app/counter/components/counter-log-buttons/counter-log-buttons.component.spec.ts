import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLogButtonsComponent } from './counter-log-buttons.component';

describe('CounterLogButtonsComponent', () => {
  let component: CounterLogButtonsComponent;
  let fixture: ComponentFixture<CounterLogButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterLogButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
