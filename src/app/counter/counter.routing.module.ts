import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterContainerComponent } from './containers/counter-container/counter-container.component';

const routes: Routes = [
  {path: '', data: {header: 'Counter'}, component: CounterContainerComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CounterRoutingModule {}

