import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';
import { RouterModule } from '@angular/router';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { AppMaterialModule } from '../app-material.module';
import { CounterTemplateComponent } from './components/counter-template/counter-template.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [CounterContainerComponent, CounterButtonComponent, CounterOutputComponent, CounterTemplateComponent, HighlightDirective],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      {path: '', component: CounterContainerComponent},
    ]),
  ]
})
export class CounterModule { }
