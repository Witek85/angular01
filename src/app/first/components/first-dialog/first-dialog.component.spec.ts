import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDialogComponent } from './first-dialog.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('FirstDialogComponent', () => {
  let component: FirstDialogComponent;
  let fixture: ComponentFixture<FirstDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDialogComponent ],
      imports: [ AppMaterialModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} } 
      ]
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
