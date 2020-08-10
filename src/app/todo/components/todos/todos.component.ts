import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../interfaces/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
			(data: Todo) => {
        this.todos$ = of(data['todos']); 
			}
    )
  }

}
