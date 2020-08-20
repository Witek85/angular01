import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

import { AppMaterialModule } from '../app-material.module';
import { FirstRootComponent } from './containers/first-root/first-root.component';
import { FirstComponent } from './components/first/first.component';
import { FirstToolbarsComponent } from './components/first-toolbars/first-toolbars.component';
import { FirstIconsComponent } from './components/first-icons/first-icons.component';
import { FirstSpinnersComponent } from './components/first-spinners/first-spinners.component';
import { FirstTabsComponent } from './components/first-tabs/first-tabs.component';
import { FirstSnackbarComponent } from './components/first-snackbar/first-snackbar.component';
import { FirstRoutingModule } from './first.routing.module';


@NgModule({
  declarations: [
    FirstComponent,
    FirstRootComponent,
    FirstToolbarsComponent,
    FirstIconsComponent,
    FirstSpinnersComponent,
    FirstTabsComponent,
    FirstSnackbarComponent
  ],
  imports: [
    AppMaterialModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
