import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { FirstRootComponent } from './first-root/first-root.component';
import { FirstComponent } from './first/first.component';
import { FirstToolbarsComponent } from './first-toolbars/first-toolbars.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { FirstIconsComponent } from './first-icons/first-icons.component';
import { FirstSpinnersComponent } from './first-spinners/first-spinners.component';
import { FirstTabsComponent } from './first-tabs/first-tabs.component';
import { FirstDialogComponent } from './first-dialog/first-dialog.component';
import { FirstSnackbarComponent } from './first-snackbar/first-snackbar.component';


@NgModule({
  declarations: [
    FirstComponent,
    FirstRootComponent,
    FirstToolbarsComponent,
    FirstIconsComponent,
    FirstSpinnersComponent,
    FirstTabsComponent,
    FirstDialogComponent,
    FirstSnackbarComponent
  ],
  imports: [
    AppMaterialModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
        {path: '', component: FirstRootComponent}
    ])
  ],
  entryComponents: [FirstDialogComponent],
})
export class FirstModule { }
