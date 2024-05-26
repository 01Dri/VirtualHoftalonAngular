import { Component } from '@angular/core';
import { LoginDTO } from '../../models/LoginDTO';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrl: './login-adm.component.css'
})
export class LoginAdmComponent {
  administrator = new LoginDTO();
  submitted = false;

  constructor(){}

  login() {
    this.submitted = true;
  }
}


