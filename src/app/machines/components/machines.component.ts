import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Machine } from '../machine.model';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines$: Observable<Machine[]>;

  constructor(private restApiService:RestApiService) { }

  ngOnInit() {
    this.restApiService.fetchMachines().subscribe(machines => {
      this.machines$ = of(machines);  
      console.log(machines);
      console.log(this.machines$)
    })
  }

}
