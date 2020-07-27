import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-machines-detail',
  templateUrl: './machines-detail.component.html',
  styleUrls: ['./machines-detail.component.css']
})
export class MachinesDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
			}
		);
  }

}
