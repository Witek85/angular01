import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Machine } from 'src/app/shared/interfaces/machine';
import { MachinesService } from 'src/app/shared/services/machines.service';

@Injectable({
    providedIn: 'root'
})
export class MachineResolver implements Resolve<{id: number, name: string}> {

    constructor (private machineService: MachinesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Machine> | Promise<Machine> | Machine {
        return this.machineService.getMachine(parseInt(route.params['id']));
    }
}