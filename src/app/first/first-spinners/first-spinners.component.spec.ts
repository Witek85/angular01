import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSpinnersComponent } from './first-spinners.component';

describe('FirstSpinnersComponent', () => {
  let component: FirstSpinnersComponent;
  let fixture: ComponentFixture<FirstSpinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSpinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
