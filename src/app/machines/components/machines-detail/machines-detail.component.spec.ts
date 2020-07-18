import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesDetailComponent } from './machines-detail.component';

describe('MachinesDetailComponent', () => {
  let component: MachinesDetailComponent;
  let fixture: ComponentFixture<MachinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesDetailComponent ]
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
