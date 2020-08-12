import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo';

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
