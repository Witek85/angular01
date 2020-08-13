import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MachinesComponent } from './containers/machines/machines.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { MachinesDetailComponent } from './components/machines-detail/machines-detail.component';
import { MachinesMapComponent } from './components/machines-map/machines-map.component';
import { MachineResolver } from './resolvers/machine.resolver.service';
import { AppMaterialModule } from '../app-material.module';
import { MachinesResolver } from './resolvers/machines.resolver.service';
import { TeamsResolver } from '../shared/resolvers/teams.resolver.service';



@NgModule({
  declarations: [MachinesComponent, MachinesListComponent, MachinesDetailComponent, MachinesMapComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    LeafletModule,
    RouterModule.forChild([
      {path: '', component: MachinesComponent, data: {title: 'Machines'}, resolve: {
        machines: MachinesResolver, 
        teams: TeamsResolver
      }, children: [
        {path: '', component: MachinesMapComponent, resolve: {machines: MachinesResolver, teams:TeamsResolver}},
        {path: ':id', component: MachinesDetailComponent, resolve: {machine: MachineResolver, teams:TeamsResolver}}
      ]},
    ]),
  ]
})
export class MachinesModule { }
