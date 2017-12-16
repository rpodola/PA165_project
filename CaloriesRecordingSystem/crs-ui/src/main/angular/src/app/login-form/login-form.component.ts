import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {LoginCredentials} from '../_classes/LoginCredentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginCredentials = new LoginCredentials();

  isIncorrectLogin: boolean;

  constructor(
    private authService: AuthenticationService
  ) { }

  login() {
    this.authService
      .login(this.loginCredentials)
      .subscribe(null, () => { this.isIncorrectLogin = true; });
  }

  ngOnInit() {
  }

}
