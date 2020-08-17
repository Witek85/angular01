import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstToolbarsComponent } from './first-toolbars.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('FirstToolbarsComponent', () => {
  let component: FirstToolbarsComponent;
  let fixture: ComponentFixture<FirstToolbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstToolbarsComponent ],
      imports: [ AppMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
