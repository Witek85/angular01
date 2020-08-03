import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Machine } from '../interfaces/machine';
import { RestApiService } from 'src/app/services/rest-api.service';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit, OnDestroy {
  machines$: Observable<Machine[]>;
  machineSubscription: Subscription;

  constructor(private restApiService:RestApiService, private machinesService: MachinesService) { }


  ngOnInit() {
    this.restApiService.getMachines();
    this.machineSubscription = this.machinesService.machinesChange.subscribe(
      (machines: Machine[]) => {
        this.machines$ = of(machines);  
      }
    );
  }

  ngOnDestroy() {
    this.machineSubscription.unsubscribe();
  }

}
