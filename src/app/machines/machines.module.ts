import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MachinesComponent } from './components/machines.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { MachinesDetailComponent } from './components/machines-detail/machines-detail.component';
import { MachinesMapComponent } from './components/machines-map/machines-map.component';
import { MachineResolver } from './resolvers/machine.resolver.service';
import { AppMaterialModule } from '../app-material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MachinesResolver } from './resolvers/machines.resolver.service';



@NgModule({
  declarations: [MachinesComponent, MachinesListComponent, MachinesDetailComponent, MachinesMapComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    LeafletModule,
    RouterModule.forChild([
      {path: '', component: MachinesComponent, resolve: {machines: MachinesResolver}, children: [
        {path: '', component: MachinesMapComponent, resolve: {machines: MachinesResolver}},
        {path: ':id', component: MachinesDetailComponent, resolve: {machine: MachineResolver}}
      ]},
    ]),
  ]
})
export class MachinesModule { }
