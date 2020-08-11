import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDialogComponent } from './first-dialog.component';

describe('FirstDialogComponent', () => {
  let component: FirstDialogComponent;
  let fixture: ComponentFixture<FirstDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
