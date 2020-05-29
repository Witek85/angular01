import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { FirstRootComponent } from './first-root/first-root.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    FirstComponent,
    FirstRootComponent
  ],
  imports: [
    AppMaterialModule,
    RouterModule.forChild([
        {path: '', component: FirstRootComponent}
    ])
  ],
})
export class FirstModule { }
