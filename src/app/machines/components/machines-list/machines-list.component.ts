import { Component, OnInit, Input } from '@angular/core';
import { Machine } from '../../interfaces/machine';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {
  @Input() machines: Machine[];

  constructor() { }

  ngOnInit() {
  }

}
