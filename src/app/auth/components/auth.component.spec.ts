import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { Router } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [ AppMaterialModule ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
