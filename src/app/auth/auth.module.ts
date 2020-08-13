import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      {path: '', data: {title: 'Authentication'}, component: AuthComponent}
    ])
  ]
})
export class AuthModule { }
