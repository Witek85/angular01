import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';
import { AppMaterialModule } from '../app-material.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  const mockActivatedRoute = { 
    data: of({ 
      header: 'header'
    }) 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsComponent ],
      imports: [AppMaterialModule],
      providers: [ { provide: ActivatedRoute, useValue: mockActivatedRoute } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
