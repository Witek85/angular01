import { Component, OnInit } from '@angular/core';

export interface TodoList {
  id: number;
  task: string;
  priority: string;
}

const ELEMENT_DATA: TodoList[] = [
  {id: 1, task: 'Do something', priority: 'Normal'},
  {id: 2, task: 'Do something else', priority: 'Normal'},
  {id: 3, task: 'Do something completely different', priority: 'Urgent'},
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'priority', 'actions'];
  todoList = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
