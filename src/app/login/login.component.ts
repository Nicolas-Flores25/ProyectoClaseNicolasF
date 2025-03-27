import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  showError = false;

  private readonly hardcodeUser = "admin"
  private readonly hardcodePassword = "1234"

  constructor(private router: Router) {}

  login() {
    if (this.username === this.hardcodeUser && this.password === this.hardcodePassword) {
      this.showError = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.showError = true; //Muestra el error

    }
  }

}
