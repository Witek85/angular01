import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../machine.model';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines$: Observable<Machine[]>;

  constructor() { }

  ngOnInit() {
  }

}
