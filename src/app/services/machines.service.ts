import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Machine } from '../machines/interfaces/machine';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  machinesChange = new Subject<Machine[]>();
  selectedMachine = new Subject<Machine>();
  machines: Machine[] = [];
  
  constructor() { }

  getMachines() {
    return this.machines.slice();
  }

  getMachine(id: number) {
    return this.machines.find(machine => {
      return machine.id === id
    });
  }

  selectMachine(machine: Machine) {
    this.selectedMachine.next(machine)
  }

  setMachines(machines: Machine[]) {
    this.machines = machines;
		this.machinesChange.next(this.machines.slice());
  }
}
