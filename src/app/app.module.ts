import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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


@NgModule({
  declarations: [ //componentes propios
    AppComponent,
    DisplayDataComponent,
    UserFormPrimeFlexComponent,
    UserFormComponent,

  ],
  imports: [ //módulos necesarios
    BrowserModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
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
