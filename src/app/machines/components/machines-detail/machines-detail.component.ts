import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Machine } from '../../interfaces/machine';

@Component({
  selector: 'app-machines-detail',
  templateUrl: './machines-detail.component.html',
  styleUrls: ['./machines-detail.component.css']
})
export class MachinesDetailComponent implements OnInit {
  machine: Machine;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.data.subscribe(
			(data: Machine) => {
				this.machine = data['machine'];
			}
		);
  }

}
