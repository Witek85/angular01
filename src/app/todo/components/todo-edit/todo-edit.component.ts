import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodosService } from 'src/app/shared/services/todos.service';
import { RestApiService } from 'src/app/shared/services/rest-api.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  editTodoFormGroup: FormGroup;
  priorities: string[] = ['Low', 'Normal', 'High', 'Urgent'];

  constructor(
    public dialogRef: MatDialogRef<TodoEditComponent>,
    private _snackBar: MatSnackBar,
    private todosService: TodosService,
    private restApiService: RestApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.editTodoFormGroup = new FormGroup({
      task: new FormControl(this.data.task, {
        validators: Validators.required, updateOn: "change"
      }),
      priority: new FormControl(this.data.priority, {
        validators: Validators.required, updateOn: "submit"
      })
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(_id: number, value: any) {
    this.dialogRef.close();
    this.restApiService.editTodo(_id, value).subscribe(todo => {
      this.todosService.editTodo(this.data.id, value);
      this._snackBar.open(`Todo ${this.data.id} has been updated`, 'Close', {
        duration: 2000,
      });
    }, error => {
      console.log(error);
    });
  }
}