import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MachinesIconsComponent } from '../machines-icons/machines-icons.component';
import { TodoIconsComponent } from '../todo-icons/todo-icons.component';
import { SecondComponent } from 'src/app/second/second.component';
import { TeamsComponent } from 'src/app/teams/teams.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule } from '@angular/forms';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent, MachinesIconsComponent, TodoIconsComponent, SecondComponent, TeamsComponent ],
      imports: [ AppMaterialModule, FormsModule, AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
