import { Component, OnInit } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component'
import { TodoListComponent } from '../todo-list/todo-list.component'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
