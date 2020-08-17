import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RandomizePipe } from '../../pipes/randomize.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoModule } from '../../todo.module';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent, TodoFormComponent, TodoListComponent, RandomizePipe ],
      imports: [ AppMaterialModule, ReactiveFormsModule ],
      providers: [ ActivatedRoute ]
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
