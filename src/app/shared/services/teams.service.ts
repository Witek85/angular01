import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from 'src/app/shared/interfaces/team'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams: Team[] = [];
  teamsChange = new Subject<Team[]>();

  constructor() { }

  getTeams() {
    return this.teams.slice();
  }

  setTeams(teams: Team[]) {
    this.teams = teams;
		this.teamsChange.next(this.teams.slice());
  }
}