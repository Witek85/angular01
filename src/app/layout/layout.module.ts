import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../app.routing.module';
import { AppMaterialModule } from '../app-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContainerComponent } from './components/container/container.component';
import { FirstDialogComponent } from '../shared/components/first-dialog/first-dialog.component';


@NgModule({
  declarations: [
    LayoutComponent, 
    ToolbarComponent, 
    ContainerComponent,
    FirstDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [LayoutComponent],
  entryComponents: [FirstDialogComponent],
})
export class LayoutModule { }
