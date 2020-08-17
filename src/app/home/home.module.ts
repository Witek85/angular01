import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { AppMaterialModule } from '../app-material.module';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
