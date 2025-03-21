import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form-prime-flex',
  templateUrl: './user-form-prime-flex.component.html',
  styleUrls: ['./user-form-prime-flex.component.css']
})
export class UserFormPrimeFlexComponent {
  name: string = '';
  age: number | null = null;

  @Output() userSubmitted = new EventEmitter<{ name: string; age: number }>();

  submitForm() {
    if (this.name && this.age !== null) {
      this.userSubmitted.emit({ name: this.name, age: this.age });
      this.name = '';
      this.age = null;
    }
  }
}
