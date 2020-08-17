import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesMapComponent } from './machines-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ActivatedRoute } from '@angular/router';

describe('MachinesMapComponent', () => {
  let component: MachinesMapComponent;
  let fixture: ComponentFixture<MachinesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesMapComponent ],
      imports: [ LeafletModule ],
      providers: [ ActivatedRoute ]
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
