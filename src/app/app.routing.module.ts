import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TeamsComponent } from './teams/teams.component';
import { TeamsResolver } from './shared/resolvers/teams.resolver.service';
import { ContainerComponent } from './layout/components/container/container.component';
import { MachinesIconsComponent } from './layout/components/machines-icons/machines-icons.component';
import { TodoIconsComponent } from './layout/components/todo-icons/todo-icons.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'machines', children: [
    {path: '', outlet: 'toolbar', component: MachinesIconsComponent},
    {path: '', loadChildren: () => import('./machines/machines.module').then(m => m.MachinesModule)}
  ]},
  { path: 'todos', children: [
    {path: '', outlet: 'toolbar', component: TodoIconsComponent},
    {path: '', component: ContainerComponent, children: [
      { path: '', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
    ]}
  ]},
  { path: '', component: ContainerComponent, children: [
    { path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) },
    { path: 'second', data: {header: 'Second'}, component: SecondComponent },
    { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
    { path: 'teams', data: {header: 'Teams'}, component: TeamsComponent, resolve: {teams: TeamsResolver} },
    { path: 'auth',  canActivate:[AuthGuard], loadChildren: './auth/auth.module#AuthModule'},
  ]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

