import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoFormGroup: FormGroup;
  priorities: string[] = ['Low', 'Normal', 'High', 'Urgent'];

  constructor(private todosService: TodosService) { }

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
    if (form.status === 'VALID') {
      this.todosService.addTodo(form.value);
      // TODO clear errors after submit
      this.todoFormGroup.reset();
    } else {
      console.log('invalid')
    }
  }
}