import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesListComponent } from './machines-list.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MachinesRoutingModule } from '../../machines.routing.module';
import { MachinesComponent } from '../../containers/machines/machines.component';
import { MachinesMapComponent } from '../machines-map/machines-map.component';
import { MachinesDetailComponent } from '../machines-detail/machines-detail.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

describe('MachinesListComponent', () => {
  let component: MachinesListComponent;
  let fixture: ComponentFixture<MachinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesListComponent, MachinesComponent, MachinesMapComponent, MachinesDetailComponent ],
      imports: [ AppMaterialModule, MachinesRoutingModule, LeafletModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
