import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MachinesComponent } from './components/machines.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { MachinesDetailComponent } from './components/machines-detail/machines-detail.component';
import { MachinesMapComponent } from './components/machines-map/machines-map.component';



@NgModule({
  declarations: [MachinesComponent, MachinesListComponent, MachinesDetailComponent, MachinesMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MachinesComponent, children: [
        {path: '', component: MachinesMapComponent},
        {path: ':id', component: MachinesDetailComponent}
      ]},
    ]),
  ]
})
export class MachinesModule { }
