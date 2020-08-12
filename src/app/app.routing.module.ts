import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TeamsComponent } from './teams/teams.component';
import { TeamsResolver } from './shared/resolvers/teams.resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'first', loadChildren: './first/first.module#FirstModule'},
  { path: 'second', component: SecondComponent },
  { path: 'todos',  loadChildren: './todo/todo.module#TodoModule'},
  { path: 'machines',  loadChildren: './machines/machines.module#MachinesModule'},
  { path: 'counter',  loadChildren: './counter/counter.module#CounterModule'},
  { path: 'teams', component: TeamsComponent, resolve: {teams: TeamsResolver} },
  { path: 'auth',  canActivate:[AuthGuard], loadChildren: './auth/auth.module#AuthModule'},
  { path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}