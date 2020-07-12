import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoList } from '../todo/todolist.model';
import { Todo } from '../todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoChange = new Subject<TodoList[]>();
  todolist: TodoList[] = [
    {id: 1, task: 'Do something', priority: 'Normal'},
    {id: 2, task: 'Do something else', priority: 'Normal'},
    {id: 3, task: 'Do something completely different!', priority: 'Urgent'},
  ];

  constructor() { }

  getTodos() {
    return this.todolist.slice();
  }

  addTodo(todo: Todo) {
    this.todolist.push({
      id: this.todolist.length ? this.todolist[this.todolist.length - 1].id + 1 : 1,
      task: todo.task,
      priority: todo.priority,
    })
		this.todoChange.next(this.todolist.slice());
  }
  
  editTodo(id: number, todo: Todo) {
    const index = this.todolist.findIndex(x => x.id === id);
    this.todolist[index].task = todo.task;
    this.todolist[index].priority = todo.priority;
		this.todoChange.next(this.todolist.slice());
	}
  
  deleteTodo(id: number) {
    this.todolist = this.todolist.filter(todo => todo.id !== id);
		this.todoChange.next(this.todolist.slice());
	}
}
