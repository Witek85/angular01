import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of, forkJoin } from 'rxjs';
import { Machine } from 'src/app/shared/interfaces/machine';
import { RestApiService } from 'src/app/shared/services/rest-api.service';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines$: Observable<Machine[]>;

  constructor(private route: ActivatedRoute, private restApiSerivice: RestApiService) { }

  ngOnInit() {
    this.route.data.subscribe(
			(data: any) => {
        const formattedMachines = data['machines'].map(machine => {
          const team = data['teams'].find(team => team.id === machine.id);
          return {
            ...machine,
            teamName: team ? team.name : "no team name"
          }
        })
        this.machines$ = of(formattedMachines); 
			}
    )
  }

}
