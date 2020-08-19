import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesDetailComponent } from './machines-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MachinesDetailComponent', () => {
  let component: MachinesDetailComponent;
  let fixture: ComponentFixture<MachinesDetailComponent>;
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
      declarations: [ MachinesDetailComponent ],
      providers: [ { provide: ActivatedRoute, useValue: mockActivatedRoute } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
