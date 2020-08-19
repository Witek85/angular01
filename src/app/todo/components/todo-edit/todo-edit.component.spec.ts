import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditComponent } from './todo-edit.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditComponent ],
      imports: [ AppMaterialModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} } 
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
});
