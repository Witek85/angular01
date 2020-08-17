import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from '../app-material.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RandomizePipe } from './pipes/randomize.pipe';
import { TodoRoutingModule } from './todo.routing.module';

@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoEditComponent,
    RandomizePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  entryComponents: [TodoEditComponent],
})
export class TodoModule {}