import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterContainerComponent } from './counter-container.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { CounterOutputComponent } from '../../components/counter-output/counter-output.component';
import { CounterButtonComponent } from '../../components/counter-button/counter-button.component';
import { CounterLogButtonsComponent } from '../../components/counter-log-buttons/counter-log-buttons.component';
import { CounterCustomInputComponent } from '../../components/counter-custom-input/counter-custom-input.component';
import { CounterTemplateComponent } from '../../components/counter-template/counter-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterOutputChildComponent } from '../../components/counter-output-child/counter-output-child.component';
import { CounterService } from '../../services/counter.service';
import { COUNTER_CONFIG } from '../../counter-config.token';
import { COUNTER_ENUM } from '../../enums/counter.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CounterContainerComponent', () => {
  let component: CounterContainerComponent;
  let fixture: ComponentFixture<CounterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CounterContainerComponent, 
        CounterOutputComponent, 
        CounterButtonComponent, 
        CounterLogButtonsComponent, 
        CounterCustomInputComponent, 
        CounterTemplateComponent,
        CounterOutputChildComponent
      ],
      imports: [ AppMaterialModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [ CounterService, {provide: COUNTER_CONFIG, useValue: { ...COUNTER_ENUM }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});