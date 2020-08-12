import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoChange = new Subject<Todo[]>();
  todolist: Todo[] = [];

  constructor() { }

  getTodos() {
    return this.todolist.slice();
  }

  setTodos(todolist: Todo[]) {
    this.todolist = todolist;
		this.todoChange.next(this.todolist.slice());
  }

  addTodo(todo: Todo) {
    this.todolist.push({
      _id: todo._id,
      id: todo.id,
      task: todo.task,
      priority: todo.priority,
    });
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
