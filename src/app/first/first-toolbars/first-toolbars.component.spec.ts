import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstToolbarsComponent } from './first-toolbars.component';

describe('FirstToolbarsComponent', () => {
  let component: FirstToolbarsComponent;
  let fixture: ComponentFixture<FirstToolbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstToolbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
