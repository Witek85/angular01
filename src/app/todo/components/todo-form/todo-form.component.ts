import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../../../services/todos.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoFormGroup: FormGroup;
  priorities: string[] = ['Low', 'Normal', 'High', 'Urgent'];

  constructor(
    private todosService: TodosService, 
    private restApiService: RestApiService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.todoFormGroup = new FormGroup({
      task: new FormControl('', {
        validators: Validators.required, updateOn: "change"
      }),
      priority: new FormControl(null, {
        validators: Validators.required, updateOn: "submit"
      }),
      consent: new FormControl(false, [(control) => {    
        return !control.value ? { 'required': true } : null;
      }])
    })
  }

  onSubmit(form: FormGroup) {
    form.get('consent').markAsTouched();
    const todolist = this.todosService.getTodos();
    const todoId = todolist.length ? todolist[todolist.length - 1].id + 1 : 1
    const todoParams = {...form.value}
    if (form.status === 'VALID') {
      this.restApiService.saveTodo({todoId, ...form.value}).subscribe(todo => {
        this.todosService.addTodo({_id: todo._id, id: todoId, ...todoParams});
        this._snackBar.open(`Todo ${todo.task} has been added`, 'Close', {
          duration: 2000,
        });
      });
      this.todoFormGroup.reset();
      Object.keys(this.todoFormGroup.controls).forEach(key => {
        this.todoFormGroup.get(key).setErrors(null) ;
      });
    } else {
      console.log('invalid')
    }
  }
}