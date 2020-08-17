import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MachinesComponent } from './containers/machines/machines.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { MachinesDetailComponent } from './components/machines-detail/machines-detail.component';
import { MachinesMapComponent } from './components/machines-map/machines-map.component';
import { AppMaterialModule } from '../app-material.module';
import { MachinesRoutingModule } from './machines.routing.module';



@NgModule({
  declarations: [MachinesComponent, MachinesListComponent, MachinesDetailComponent, MachinesMapComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    LeafletModule,
    MachinesRoutingModule
  ]
})
export class MachinesModule { }
