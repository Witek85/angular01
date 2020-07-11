import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'first', loadChildren: './first/first.module#FirstModule'},
  { path: 'second', component: SecondComponent },
  { path: 'todos', component: TodosComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
