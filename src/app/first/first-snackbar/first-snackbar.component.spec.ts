import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSnackbarComponent } from './first-snackbar.component';

describe('FirstSnackbarComponent', () => {
  let component: FirstSnackbarComponent;
  let fixture: ComponentFixture<FirstSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
