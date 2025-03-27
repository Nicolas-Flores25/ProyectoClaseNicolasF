import { Component, Input, OnChanges } from '@angular/core';
import { userDTO } from '../Interfaces/userDTO';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnChanges {
  @Input() userObj: userDTO | null = null;

  ngOnChanges() {
    console.log('Datos en DisplayComponent:', this.userObj);
  }
}