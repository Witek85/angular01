import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodosService } from './todos.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { Machine } from 'src/app/shared/interfaces/machine';
import { of } from 'rxjs';
import { MachinesService } from './machines.service';
import { tap, catchError } from 'rxjs/operators';
import { TeamsService } from './teams.service';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http:HttpClient, 
    private todosService: TodosService, 
    private machinesService: MachinesService,
    private teamsService: TeamsService
  ) { }

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

  fetchTeams() {
    return this.http
      .get<Team[]>('http://ws-todolist-api.herokuapp.com/teams')
      .pipe(
        tap(teams => {
          this.teamsService.setTeams(teams);
        }),
        catchError(err => {
          console.log('TODO catchError', err)
          return of([])
        })
      )
  }
}