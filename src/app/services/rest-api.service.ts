import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodosService } from './todos.service';
import { Todo } from '../todo/interfaces/todo';
import { Machine } from '../machines/interfaces/machine';
import { Observable } from 'rxjs';
import { MachinesService } from './machines.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient, private todosService: TodosService, private machinesService: MachinesService) { }

  fetchTodos() {
    this.http
    .get<Todo[]>('http://ws-todolist-api.herokuapp.com/todos') 
    .subscribe(todos => {
      this.todosService.setTodos(todos);
    },
    error => {
      // TODO set error in error alert
      console.log(error.message)
    });
  }

  saveTodo(todo: Todo) {
    return this.http.post<Todo>('http://ws-todolist-api.herokuapp.com/todos', {
      id: todo.id,
      task: todo.task,
      priority: todo.priority
    }) 
  }

  editTodo(id: number, todo: Todo) {
    console.log(id, todo)
    return this.http.put<Todo>('http://ws-todolist-api.herokuapp.com/todos/' + id, {
      id: todo.id,
      task: todo.task,
      priority: todo.priority
    }) 
	}

  deleteTodo(id: number) {
    return this.http.delete<Todo>('http://ws-todolist-api.herokuapp.com/todos/' + id)
  }
  
  getMachines() {
    this.http
    .get<Machine[]>('http://ws-todolist-api.herokuapp.com/machines')
    .subscribe(machines => {
      console.log('machines', machines)
      this.machinesService.setMachines(machines);
    })
  }

  // fetchTodos() {
  //   this.http
  //   .get<Todo[]>('http://ws-todolist-api.herokuapp.com/todos') 
  //   .subscribe(todos => {
  //     this.todosService.setTodos(todos);
  //   },
  //   error => {
  //     // TODO set error in error alert
  //     console.log(error.message)
  //   });
  // }
}
