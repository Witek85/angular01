import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/shared/services/todos.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { RestApiService } from 'src/app/shared/services/rest-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'priority', 'actions'];
  @Input() todos: Todo[];
  todoSubscription: Subscription;

  constructor(
    private todosService: TodosService,
    private restApiService: RestApiService, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.todoSubscription = this.todosService.todoChange.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
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
    this.restApiService.deleteTodo(item._id).subscribe(() => {
      this.todosService.deleteTodo(item.id);
      this._snackBar.open(`Todo ${item.task} has been deleted`, 'Close', {
        duration: 2000,
      });
    });
  }

}
