import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MachinesComponent } from './components/machines.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { MachinesDetailComponent } from './components/machines-detail/machines-detail.component';
import { MachinesMapComponent } from './components/machines-map/machines-map.component';
import { MachineResolver } from './resolvers/machine.resolver.service';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [MachinesComponent, MachinesListComponent, MachinesDetailComponent, MachinesMapComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      {path: '', component: MachinesComponent, children: [
        {path: '', component: MachinesMapComponent},
        {path: ':id', component: MachinesDetailComponent, resolve: {machine: MachineResolver}}
      ]},
    ]),
  ]
})
export class MachinesModule { }
