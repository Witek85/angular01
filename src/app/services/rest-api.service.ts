import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoList } from '../todo/todolist.model';
import { TodosService } from './todos.service';
import { Todo } from '../todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient, private todosService: TodosService) { }

  fetchTodos() {
    this.http
    .get<TodoList[]>('http://ws-todolist-api.herokuapp.com/todos') 
    .subscribe(todos => {
      this.todosService.setTodos(todos);
    });
  }

  saveTodo(todo: Todo) {
    return this.http.post<Todo>('http://ws-todolist-api.herokuapp.com/todos', {
      id: todo.todoId,
      task: todo.task,
      priority: todo.priority
    }) 
  }
}
