import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { TodoList } from '../todolist.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // todoSubject = new Subject<TodoList[]>();
  todolist: TodoList[] = [
    {id: 1, task: 'Do something', priority: 'Normal'},
    {id: 2, task: 'Do something else', priority: 'Normal'},
    {id: 3, task: 'Do something completely different!', priority: 'Urgent'},
  ];

  constructor() { }

  getTodos() {
    return this.todolist.slice();
	}
}
