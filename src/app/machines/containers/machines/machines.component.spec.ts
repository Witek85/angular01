import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesComponent } from './machines.component';
import { MachinesListComponent } from '../../components/machines-list/machines-list.component';
import { MachinesMapComponent } from '../../components/machines-map/machines-map.component';
import { MachinesRoutingModule } from '../../machines.routing.module';
import { MachinesDetailComponent } from '../../components/machines-detail/machines-detail.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

describe('MachinesComponent', () => {
  let component: MachinesComponent;
  let fixture: ComponentFixture<MachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesComponent, MachinesListComponent, MachinesMapComponent, MachinesDetailComponent ],
      imports: [ MachinesRoutingModule, AppMaterialModule, LeafletModule ]
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
