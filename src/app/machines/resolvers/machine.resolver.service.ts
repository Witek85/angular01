import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Machine } from '../interfaces/machine';
import { MachinesService } from 'src/app/services/machines.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MachineResolver implements Resolve<{id: number, name: string}> {

    constructor (private machineService: MachinesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Machine> | Promise<Machine> | Machine {
        return this.machineService.getMachine(parseInt(route.params['id']));
    }
}