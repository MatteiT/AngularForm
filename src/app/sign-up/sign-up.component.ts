import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor() { }

  model = new User(
    ' ',
    ' ',
    ' ',
    ' '
  );


  onSubmit() { 
    console.log(this.model);
  }



}
