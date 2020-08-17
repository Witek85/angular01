import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditComponent } from './todo-edit.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditComponent ],
      imports: [ AppMaterialModule, ReactiveFormsModule ]
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
