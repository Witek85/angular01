import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from 'src/app/shared/services/rest-api.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodosService } from 'src/app/shared/services/todos.service';

@Injectable({
    providedIn: 'root'
})
export class TodosResolver implements Resolve<Todo[]> {

    constructor (private todosService: TodosService, private restApiService: RestApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> | Promise<Todo[]> | Todo[] {
        const todos = this.todosService.getTodos();
        return todos.length === 0 ? this.restApiService.fetchTodos() : todos;
    }
}