import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

const routes: Routes = [
  {path: '', data: {header: 'Home', subheader: 'Welcome to the app'}, component: HomeContainerComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}


