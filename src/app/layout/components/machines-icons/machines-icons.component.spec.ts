import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesIconsComponent } from './machines-icons.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('MachinesIconsComponent', () => {
  let component: MachinesIconsComponent;
  let fixture: ComponentFixture<MachinesIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesIconsComponent ],
      imports: [ AppMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
