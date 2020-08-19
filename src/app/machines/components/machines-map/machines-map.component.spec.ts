import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesMapComponent } from './machines-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MachinesMapComponent', () => {
  let component: MachinesMapComponent;
  let fixture: ComponentFixture<MachinesMapComponent>;
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
      ]
    }) 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesMapComponent ],
      imports: [ LeafletModule ],
      providers: [ { provide: ActivatedRoute, useValue: mockActivatedRoute } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
