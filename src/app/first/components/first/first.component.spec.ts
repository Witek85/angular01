import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent ],
      imports: [ AppMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
