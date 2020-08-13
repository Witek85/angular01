import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      {path: '', component: HomeContainerComponent}
  ])
  ]
})
export class HomeModule { }