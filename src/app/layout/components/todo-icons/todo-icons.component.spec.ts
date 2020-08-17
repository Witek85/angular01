import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIconsComponent } from './todo-icons.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('TodoIconsComponent', () => {
  let component: TodoIconsComponent;
  let fixture: ComponentFixture<TodoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoIconsComponent ],
      imports: [
        AppMaterialModule,
      ]
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
