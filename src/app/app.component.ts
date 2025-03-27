import { Component } from '@angular/core';
import { userDTO } from './Interfaces/userDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userObj: userDTO | null = null;

  onUserSubmit(data: userDTO) {
    console.log('Datos recibidos en AppComponent:', data);
    this.userObj = data;
  }
}