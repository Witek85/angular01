import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FirstDialogComponent } from './first-dialog.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('FirstDialogComponent', () => {
  let component: FirstDialogComponent;
  let fixture: ComponentFixture<FirstDialogComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDialogComponent ],
      imports: [ AppMaterialModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MatDialogRef, useValue: dialogMock } 
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

  it('should close dialog on click', fakeAsync(() => {
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
});
