import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoList } from '../todolist.model';

const todosy = [
  {id: 1, task: 'Do something', priority: 'Normal'},
  {id: 2, task: 'Do something else', priority: 'Normal'},
  {id: 3, task: 'Do something completely different!', priority: 'Urgent'},
]

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoChange = new Subject<TodoList[]>();
  todolist: TodoList[] = todosy;

  constructor() { }

  getTodos() {
    return this.todolist.slice();
  }
  
  deleteTodo(id) {
    this.todolist = this.todolist.filter(todo => todo.id !== id);
		this.todoChange.next(this.todolist.slice());
	}
}
