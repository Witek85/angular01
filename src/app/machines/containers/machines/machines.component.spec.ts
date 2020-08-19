import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesComponent } from './machines.component';
import { MachinesListComponent } from '../../components/machines-list/machines-list.component';
import { MachinesMapComponent } from '../../components/machines-map/machines-map.component';
import { MachinesRoutingModule } from '../../machines.routing.module';
import { MachinesDetailComponent } from '../../components/machines-detail/machines-detail.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MachinesComponent', () => {
  let component: MachinesComponent;
  let fixture: ComponentFixture<MachinesComponent>;
  const mockActivatedRoute = { 
    data: of({ 
      machines: [
        {
          _id: '_1234',
          id: 1,
          name: "name 1",
          lat: 10,
          lng: 10,
          teamId: 1,
        },
        {
          _id: '_1235',
          id: 2,
          name: "name 2",
          lat: 10,
          lng: 10,
          teamId: 1,
        } 
      ],
      teams: [
        {
          _id: '_1234',
          id: 1,
          name: "team 1",
        }
      ]
    }),
    'snapshot': {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MachinesComponent, 
        MachinesListComponent, 
        MachinesMapComponent, 
        MachinesDetailComponent 
      ],
      imports: [ 
        MachinesRoutingModule, 
        AppMaterialModule, 
        LeafletModule, 
        BrowserAnimationsModule, 
        RouterTestingModule.withRoutes([]), 
      ],
      providers: [ 
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
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

export class MockActivatedRoute {
  parent: any;
  params: any;

  constructor(options) {
    this.parent = options.parent;
    this.params = options.params;
  }
}