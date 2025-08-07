import { importProvidersFrom, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilisateurComponent } from './components/sign-up/utilisateur.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    UtilisateurComponent,
    TodoListComponent,
    UtilisateurListComponent,
    TodoDetailComponent,
    TodoTableComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule
    
    ],

  providers: [
    provideHttpClient(),
    
    //injecter in-memory-data.service.ts
    //comme il est @Injectable
   
    provideNativeDateAdapter(),
    //localisation pour affichage en format francais (devise, date...)
    { provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }