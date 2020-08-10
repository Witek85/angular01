import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Machine } from '../interfaces/machine';
import { RestApiService } from 'src/app/services/rest-api.service';
import { MachinesService } from 'src/app/services/machines.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines$: Observable<Machine[]>;

  constructor(private restApiService:RestApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.restApiService.fetchMachines();
    this.route.data.subscribe(
			(data: Machine) => {
        this.machines$ = of(data['machines']); 
			}
    )
  }


}
