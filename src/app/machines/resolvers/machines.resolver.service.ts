import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Machine } from '../interfaces/machine';
import { MachinesService } from 'src/app/services/machines.service';
import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Injectable({
    providedIn: 'root'
})
export class MachinesResolver implements Resolve<Machine[]> {

    constructor (private machineService: MachinesService, private restApiService: RestApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Machine[]> | Promise<Machine[]> | Machine[] {
        const machines = this.machineService.getMachines();
        return machines.length === 0 ? this.restApiService.fetchMachines() : machines;
    }
}