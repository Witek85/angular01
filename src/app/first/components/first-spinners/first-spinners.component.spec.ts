import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSpinnersComponent } from './first-spinners.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('FirstSpinnersComponent', () => {
  let component: FirstSpinnersComponent;
  let fixture: ComponentFixture<FirstSpinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSpinnersComponent ],
      imports: [ AppMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
