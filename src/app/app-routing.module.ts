import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UtilisateurComponent } from './components/sign-up/utilisateur.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'utilisateur', component: UtilisateurComponent
  },
  {
    path: 'todo-list', component: TodoListComponent //path vide car page par défaut
  },
  {
    path: 'utilisateur-list', component: UtilisateurListComponent //path vide car page par défaut
  },
  { path: 'todo-detail/:id', component: TodoDetailComponent },

  { path: 'todo-table', component: TodoTableComponent},

  { path: '', component: DashboardComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

