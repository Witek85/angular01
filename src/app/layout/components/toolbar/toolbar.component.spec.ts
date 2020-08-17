import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MachinesIconsComponent } from '../machines-icons/machines-icons.component';
import { TodoIconsComponent } from '../todo-icons/todo-icons.component';
import { ContainerComponent } from '../container/container.component';
import { SecondComponent } from 'src/app/second/second.component';
import { TeamsComponent } from 'src/app/teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent, MachinesIconsComponent, TodoIconsComponent, ContainerComponent, SecondComponent, TeamsComponent ],
      imports: [
        AppMaterialModule,
        AppRoutingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
