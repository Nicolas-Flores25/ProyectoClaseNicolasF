import { Component, EventEmitter, Output } from '@angular/core';
import { userDTO } from '../../Interfaces/userDTO';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userObj: userDTO = {
    name: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: ''
  };

  @Output() userSubmitted = new EventEmitter<userDTO>();

  submitForm() {
    console.log('Botón presionado'); // Verifica si el método se llama
    
    if (this.userObj.name && this.userObj.email) {
      console.log('Datos a enviar:', this.userObj);
      this.userSubmitted.emit({...this.userObj});
      this.resetForm();
    } else {
      console.warn('Faltan campos requeridos');
    }
  }

  resetForm() {
    this.userObj = {
      name: '',
      lastName: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
}