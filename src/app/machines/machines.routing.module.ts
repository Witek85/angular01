import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './containers/machines/machines.component';
import { MachinesResolver } from './resolvers/machines.resolver.service';
import { TeamsResolver } from '../shared/resolvers/teams.resolver.service';
import { MachinesMapComponent } from './components/machines-map/machines-map.component';
import { MachinesDetailComponent } from './components/machines-detail/machines-detail.component';
import { MachineResolver } from './resolvers/machine.resolver.service';

const routes: Routes = [
  {path: '', component: MachinesComponent, data: {header: 'Machines'}, resolve: {
    machines: MachinesResolver, 
    teams: TeamsResolver
  }, children: [
    {path: '', component: MachinesMapComponent, resolve: {machines: MachinesResolver, teams:TeamsResolver}},
    {path: ':id', component: MachinesDetailComponent, resolve: {machine: MachineResolver, teams:TeamsResolver}}
  ]},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MachinesRoutingModule {}

