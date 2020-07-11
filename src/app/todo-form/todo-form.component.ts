import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.todoFormGroup = new FormGroup({
      task: new FormControl('', {
        validators: Validators.required, updateOn: "change"
      }),
      priority: new FormControl(null, {
        validators: Validators.required, updateOn: "submit"
      })
    })
  }

  onSubmit(form: FormGroup) {
    
    if (form.status === 'VALID') {
      console.log(form)
    } else {
      console.log('invalid')
    }
  }
}