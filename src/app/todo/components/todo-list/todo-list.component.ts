import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../services/todos.service';
import { Todo } from '../../interfaces/todo';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { RestApiService } from 'src/app/services/rest-api.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'priority', 'actions'];
  todoList: Todo[];
  todoSubscription: Subscription;

  constructor(
    private todosService: TodosService,
    private restApiService: RestApiService, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.restApiService.fetchTodos();
    this.todoSubscription = this.todosService.todoChange.subscribe(
      (todoList: Todo[]) => {
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

  onDelete(item) {
    this.todosService.deleteTodo(item.id);
    this.restApiService.deleteTodo(item._id).subscribe(todo => {
      this._snackBar.open(`Todo ${item.task} has been deleted`, 'Close', {
        duration: 2000,
      });
    });
  }

}
