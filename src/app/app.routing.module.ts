import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TeamsComponent } from './teams/teams.component';
import { TeamsResolver } from './shared/resolvers/teams.resolver.service';
import { ContainerComponent } from './layout/components/container/container.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'machines', loadChildren: () => import('./machines/machines.module').then(m => m.MachinesModule) },
  { path: '', component: ContainerComponent, children: [
    { path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) },
    { path: 'second', data: {title: 'Second'}, component: SecondComponent },
    { path: 'todos', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
    { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
    { path: 'teams', data: {title: 'Teams'}, component: TeamsComponent, resolve: {teams: TeamsResolver} },
    { path: 'auth',  canActivate:[AuthGuard], loadChildren: './auth/auth.module#AuthModule'},
  ]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}