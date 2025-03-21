import { Component } from '@angular/core';
import { userDTO } from './Interfaces/userDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
    userObj: userDTO | null = null; // Aquí se guardarán los datos del usuario
  
    // Esta función se llamará cuando el formulario se envíe
    onUserSubmit(data: userDTO) {
      this.userObj = data; // Asignamos los datos recibidos a la propiedad userObj
    }
  }
