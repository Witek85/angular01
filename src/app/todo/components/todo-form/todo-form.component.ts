import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../../../services/todos.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoFormGroup: FormGroup;
  priorities: string[] = ['Low', 'Normal', 'High', 'Urgent'];

  constructor(private todosService: TodosService, private restApiService: RestApiService) { }

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
    if (form.status === 'VALID') {
      this.todosService.addTodo({todoId, ...form.value});
      this.restApiService.saveTodo({todoId, ...form.value}).subscribe(todo => {
        console.log('todo', todo)
      });
      // TODO clear errors after submit
      this.todoFormGroup.reset();
    } else {
      console.log('invalid')
    }
  }
}