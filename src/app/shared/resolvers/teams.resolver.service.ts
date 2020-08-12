import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from 'src/app/shared/services/rest-api.service';
import { TeamsService } from '../services/teams.service';
import { Team } from '../interfaces/team';

@Injectable({
    providedIn: 'root'
})
export class TeamsResolver implements Resolve<Team[]> {

    constructor (private teamsService: TeamsService, private restApiService: RestApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]> | Promise<Team[]> | Team[] {
        const teams = this.teamsService.getTeams();
        return teams.length === 0 ? this.restApiService.fetchTeams() : teams;
    }
}