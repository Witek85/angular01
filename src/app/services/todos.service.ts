import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoList } from '../todo/todolist.model';
import { Todo } from '../todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoChange = new Subject<TodoList[]>();
  todolist: TodoList[] = [];

  constructor() { }

  getTodos() {
    return this.todolist.slice();
  }

  setTodos(todolist: TodoList[]) {
    this.todolist = todolist;
		this.todoChange.next(this.todolist.slice());
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
