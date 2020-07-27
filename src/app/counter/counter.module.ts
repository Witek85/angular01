import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';
import { RouterModule } from '@angular/router';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [CounterContainerComponent, CounterButtonComponent, CounterOutputComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      {path: '', component: CounterContainerComponent},
    ]),
  ]
})
export class CounterModule { }
