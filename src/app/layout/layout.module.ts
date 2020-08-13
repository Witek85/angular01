import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../app.routing.module';
import { AppMaterialModule } from '../app-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContainerComponent } from './components/container/container.component';
import { ToolbarSubheaderComponent } from './components/toolbar-subheader/toolbar-subheader.component';



@NgModule({
  declarations: [
    LayoutComponent, 
    ToolbarComponent, 
    ContainerComponent, 
    ToolbarSubheaderComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
