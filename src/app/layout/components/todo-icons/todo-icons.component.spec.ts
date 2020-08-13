import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIconsComponent } from './todo-icons.component';

describe('TodoIconsComponent', () => {
  let component: TodoIconsComponent;
  let fixture: ComponentFixture<TodoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
