import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RandomizePipe } from '../../pipes/randomize.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent, RandomizePipe ],
      imports: [ AppMaterialModule, ReactiveFormsModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
