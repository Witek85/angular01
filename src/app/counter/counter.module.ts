import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './containers/counter-container/counter-container.component';
import { RouterModule } from '@angular/router';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { AppMaterialModule } from '../app-material.module';
import { CounterTemplateComponent } from './components/counter-template/counter-template.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CounterOutputChildComponent } from './components/counter-output-child/counter-output-child.component';
import { CounterCustomInputComponent } from './components/counter-custom-input/counter-custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterService } from './services/counter.service';



@NgModule({
  declarations: [CounterContainerComponent, CounterButtonComponent, CounterOutputComponent, CounterTemplateComponent, HighlightDirective, CounterOutputChildComponent, CounterCustomInputComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: CounterContainerComponent},
    ]),
  ],
  providers: [
    CounterService
  ]
})
export class CounterModule { }
