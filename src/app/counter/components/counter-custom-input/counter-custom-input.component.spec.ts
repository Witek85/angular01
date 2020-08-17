import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCustomInputComponent } from './counter-custom-input.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CounterCustomInputComponent', () => {
  let component: CounterCustomInputComponent;
  let fixture: ComponentFixture<CounterCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCustomInputComponent ],
      imports: [ AppMaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
