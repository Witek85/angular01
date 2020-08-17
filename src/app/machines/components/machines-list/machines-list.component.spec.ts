import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesListComponent } from './machines-list.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('MachinesListComponent', () => {
  let component: MachinesListComponent;
  let fixture: ComponentFixture<MachinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesListComponent ],
      imports: [ AppMaterialModule ]
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
