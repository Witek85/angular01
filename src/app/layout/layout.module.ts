import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../app.routing.module';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
