import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosResolver } from './resolvers/todos.resolver.service';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {path: '', data: {header: 'Todo'}, resolve: { todos: TodosResolver }, component: TodosComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TodoRoutingModule {}

