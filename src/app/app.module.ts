import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';


const routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'first', loadChildren: './first/first.module#FirstModule'},
  { path: 'second', component: SecondComponent },
  { path: 'todos',  loadChildren: './todo/todo.module#TodoModule'},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
