import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { FirstRootComponent } from './first-root/first-root.component';
import { FirstComponent } from './first/first.component';
import { FirstToolbarsComponent } from './first-toolbars/first-toolbars.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    FirstComponent,
    FirstRootComponent,
    FirstToolbarsComponent
  ],
  imports: [
    AppMaterialModule,
    MatToolbarModule,
    RouterModule.forChild([
        {path: '', component: FirstRootComponent}
    ])
  ],
})
export class FirstModule { }
