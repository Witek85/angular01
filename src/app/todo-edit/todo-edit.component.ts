import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data)
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

  onSubmit() {
    console.log('save');
    this.dialogRef.close();
  }

}