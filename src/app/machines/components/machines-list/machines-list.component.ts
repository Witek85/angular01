import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Machine } from '../../interfaces/machine';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {
  @Input() machines: Machine[];
  @ViewChild(MatAccordion, {static: true}) accordion: MatAccordion;

  constructor() { }

  ngOnInit() {
  }

}
