import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second.component';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule } from '@angular/forms';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondComponent ],
      imports: [ AppMaterialModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
