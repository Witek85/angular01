import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './components/machines.component';
import { RouterModule } from '@angular/router';
import { MachinesListComponent } from './components/machines-list/machines-list.component';



@NgModule({
  declarations: [MachinesComponent, MachinesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MachinesComponent},
    ]),
  ]
})
export class MachinesModule { }
