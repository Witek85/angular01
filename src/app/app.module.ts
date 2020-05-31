import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'first', loadChildren: './first/first.module#FirstModule'},
  { path: 'second', component: SecondComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
