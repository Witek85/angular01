import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesMapComponent } from './machines-map.component';

describe('MachinesMapComponent', () => {
  let component: MachinesMapComponent;
  let fixture: ComponentFixture<MachinesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesMapComponent ]
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
