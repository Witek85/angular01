import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from '../app-material.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: TodosComponent}
    ]),
    HttpClientModule
  ],
  entryComponents: [TodoEditComponent],
})
export class TodoModule { }




// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { ShoppingListComponent } from './shopping-list.component';
// import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
// import { SharedModule } from 'app/shared/shared.module';


// @NgModule({
//   declarations: [
//     ShoppingListComponent,
//     ShoppingEditComponent,
//   ],
//   imports: [
//       SharedModule,
//       FormsModule,
//       RouterModule.forChild([
//         {path: '', component: ShoppingListComponent}
//       ])
//   ],
// })
// export class ShoppingListModule { }
