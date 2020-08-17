import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTemplateComponent } from './counter-template.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('CounterTemplateComponent', () => {
  let component: CounterTemplateComponent;
  let fixture: ComponentFixture<CounterTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTemplateComponent ],
      imports: [ AppMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
