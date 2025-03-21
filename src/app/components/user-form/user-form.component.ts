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
    age: 0,
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };


  @Output() userSubmitted = new EventEmitter<userDTO>();

  submitForm() {
    if (this.userObj.name && this.userObj.age && this.userObj.email && this.userObj.password && this.userObj.confirmPassword !== null) {
      this.userSubmitted.emit({ name: this.userObj.name, age: this.userObj.age, lastName: this.userObj.lastName, email: this.userObj.email, password: this.userObj.password, confirmPassword: this.userObj.confirmPassword  });

      this.userObj.name = '';
      this.userObj.age = 0; 
      this.userObj.lastName = '';
      this.userObj.email = '';
      this.userObj.password = '';
      this.userObj.confirmPassword = '';
      
    }
  }
}