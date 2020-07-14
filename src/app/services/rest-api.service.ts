import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoList } from '../todo/todolist.model';
import { TodosService } from './todos.service';

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
}
