import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoList } from '../todolist.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'task', 'priority', 'actions'];
  todoList: TodoList[];
  todoSubscription: Subscription;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todoSubscription = this.todosService.todoChange.subscribe(
      (todoList: TodoList[]) => {
        this.todoList = todoList;
      }
    );
    this.todoList = this.todosService.getTodos();
  }

  ngOnDestroy() {
    this.todoSubscription.unsubscribe();
  }

  onDelete(id) {
    this.todosService.deleteTodo(id);
  }

}
