import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodosService } from './todos.service';
import { Todo } from '../todo/interfaces/todo';
import { Machine } from '../machines/interfaces/machine';
import { of } from 'rxjs';
import { MachinesService } from './machines.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient, private todosService: TodosService, private machinesService: MachinesService) { }

  fetchTodos() {
    return this.http
      .get<Todo[]>('http://ws-todolist-api.herokuapp.com/todos')
      .pipe(
        tap(todos => {
          this.todosService.setTodos(todos);
        }),
        catchError(err => {
          console.log('TODO catchError', err)
          return of([])
        })
      )
  }

  saveTodo(todo: Todo) {
    return this.http.post<Todo>('http://ws-todolist-api.herokuapp.com/todos', {
      id: todo.id,
      task: todo.task,
      priority: todo.priority
    }) 
  }

  editTodo(id: number, todo: Todo) {
    return this.http.put<Todo>('http://ws-todolist-api.herokuapp.com/todos/' + id, {
      id: todo.id,
      task: todo.task,
      priority: todo.priority
    }) 
	}

  deleteTodo(id: number) {
    return this.http.delete<Todo>('http://ws-todolist-api.herokuapp.com/todos/' + id)
  }
  
  fetchMachines() {
   return this.http
    .get<Machine[]>('http://ws-todolist-api.herokuapp.com/machines')
    .pipe(
      tap(machines => {
        this.machinesService.setMachines(machines);
      }),
      catchError(err => {
        console.log('TODO catchError', err)
        return of([])
      })
    )
  }
}