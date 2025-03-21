import { Component, Input } from '@angular/core';
import { userDTO } from '../Interfaces/userDTO';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {

  @Input() userObj: userDTO | null = null;

  }
