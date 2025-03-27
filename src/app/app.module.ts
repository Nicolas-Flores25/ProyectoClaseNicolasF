import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Componentes
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { UserFormPrimeFlexComponent } from './user-form-prime-flex/user-form-prime-flex.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //Ruta raiz al login
  { path: 'login', component: LoginComponent },   
  {path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: UserFormComponent } // Ejemplo: Ruta de registro
];

@NgModule({
  declarations: [ //componentes propios
    AppComponent,
    DisplayDataComponent,
    UserFormPrimeFlexComponent,
    UserFormComponent,
    LoginComponent,
    DashboardComponent, 

  ],
  imports: [ //módulos necesarios
    BrowserModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ // usar estos componentes en otro módulo
    DisplayDataComponent,
    UserFormPrimeFlexComponent,
    UserFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ] // ✅ Bootstrap para iniciar la app
})


export class AppModule { }
