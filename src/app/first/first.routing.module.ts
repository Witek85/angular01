import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstRootComponent } from './containers/first-root/first-root.component';

const routes: Routes = [
  {path: '', data: {header: 'First'}, component: FirstRootComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FirstRoutingModule {}

