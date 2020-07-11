import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoList } from '../todolist.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'priority', 'actions'];
  todoList: TodoList[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todoList = this.todosService.getTodos();
  }

}
