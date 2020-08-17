import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterContainerComponent } from './containers/counter-container/counter-container.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { AppMaterialModule } from '../app-material.module';
import { CounterTemplateComponent } from './components/counter-template/counter-template.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CounterOutputChildComponent } from './components/counter-output-child/counter-output-child.component';
import { CounterCustomInputComponent } from './components/counter-custom-input/counter-custom-input.component';
import { CounterService } from './services/counter.service';
import { CounterLogButtonsComponent } from './components/counter-log-buttons/counter-log-buttons.component';

import { COUNTER_CONFIG } from './counter-config.token';
import { COUNTER_ENUM } from './enums/counter.enum'
import { CounterRoutingModule } from './counter.routing.module';


@NgModule({
  declarations: [
    CounterContainerComponent, 
    CounterButtonComponent, 
    CounterOutputComponent, 
    CounterTemplateComponent, 
    HighlightDirective, 
    CounterOutputChildComponent, 
    CounterCustomInputComponent, 
    CounterLogButtonsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    CounterRoutingModule
  ],
  providers: [
    CounterService,
    {provide: COUNTER_CONFIG, useValue: { ...COUNTER_ENUM }}
  ]
})
export class CounterModule { }
