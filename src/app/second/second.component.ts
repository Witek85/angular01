import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public startDate = new Date();
  public minDate = new Date(2020, 1, 1);

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) { console.log(form) }

}
