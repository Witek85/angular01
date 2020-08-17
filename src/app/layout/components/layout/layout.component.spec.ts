import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MachinesIconsComponent } from '../machines-icons/machines-icons.component';
import { TodoIconsComponent } from '../todo-icons/todo-icons.component';
import { ContainerComponent } from '../container/container.component';
import { SecondComponent } from 'src/app/second/second.component';
import { TeamsComponent } from 'src/app/teams/teams.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LayoutComponent, 
        ToolbarComponent, 
        MachinesIconsComponent, 
        TodoIconsComponent, 
        ContainerComponent, 
        SecondComponent, 
        TeamsComponent 
      ],
      imports: [
        AppMaterialModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
