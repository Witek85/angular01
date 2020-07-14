import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../services/todos.service';
import { TodoList } from '../../todolist.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'priority', 'actions'];
  todoList: TodoList[];
  todoSubscription: Subscription;

  constructor(private todosService: TodosService, private restApiService: RestApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.restApiService.fetchTodos();
    this.todoSubscription = this.todosService.todoChange.subscribe(
      (todoList: TodoList[]) => {
        this.todoList = todoList;
      }
    );
  }

  ngOnDestroy() {
    this.todoSubscription.unsubscribe();
  }

  onEdit(item) {
    const dialogRef = this.dialog.open(TodoEditComponent, {
      data: {...item}
    });
  }

  onDelete(id) {
    this.todosService.deleteTodo(id);
  }

}
