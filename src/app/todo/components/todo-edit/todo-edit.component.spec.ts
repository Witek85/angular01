import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TodoEditComponent } from './todo-edit.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditComponent ],
      imports: [ AppMaterialModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on cancel', fakeAsync(() => {
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[0];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should close dialog on submit', fakeAsync(() => {
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelectorAll('button')[1];
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
});
