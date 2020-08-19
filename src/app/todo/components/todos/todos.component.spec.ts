import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RandomizePipe } from '../../pipes/randomize.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  const mockActivatedRoute = { 
    data: of({ 
      todo: {
        _id: '_1234',
        id: 1,
        task: "task",
        priority: "low"
      } 
    }) 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent, TodoFormComponent, TodoListComponent, RandomizePipe ],
      imports: [ AppMaterialModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [ HttpClient, HttpHandler, { provide: ActivatedRoute, useValue: mockActivatedRoute } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
