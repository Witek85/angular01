import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth.component';
import { AppMaterialModule } from '../app-material.module';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
