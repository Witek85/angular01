import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesComponent } from './machines.component';
import { MachinesListComponent } from '../../components/machines-list/machines-list.component';
import { MachinesMapComponent } from '../../components/machines-map/machines-map.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MachinesIconsComponent } from 'src/app/layout/components/machines-icons/machines-icons.component';
import { TodoIconsComponent } from 'src/app/layout/components/todo-icons/todo-icons.component';
import { ContainerComponent } from 'src/app/layout/components/container/container.component';
import { SecondComponent } from 'src/app/second/second.component';

describe('MachinesComponent', () => {
  let component: MachinesComponent;
  let fixture: ComponentFixture<MachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesComponent, MachinesListComponent, MachinesMapComponent ],
      imports: [ AppRoutingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
