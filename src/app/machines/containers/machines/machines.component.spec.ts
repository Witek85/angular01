import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesComponent } from './machines.component';
import { MachinesListComponent } from '../../components/machines-list/machines-list.component';
import { MachinesMapComponent } from '../../components/machines-map/machines-map.component';
import { MachinesRoutingModule } from '../../machines.routing.module';
import { MachinesDetailComponent } from '../../components/machines-detail/machines-detail.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MachinesComponent', () => {
  let component: MachinesComponent;
  let fixture: ComponentFixture<MachinesComponent>;
  const mockActivatedRoute = { 
    data: of({ 
      machine: {
        _id: '_1234',
        id: 1,
        name: "name",
        lat: 10,
        lng: 10,
        teamId: 1,
      } 
    }) 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesComponent, MachinesListComponent, MachinesMapComponent, MachinesDetailComponent ],
      imports: [ MachinesRoutingModule, AppMaterialModule, LeafletModule ],
      providers: [ HttpClient, HttpHandler, ChildrenOutletContexts, { provide: ActivatedRoute, useValue: mockActivatedRoute } ],
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
