import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {LoginCredentials} from '../_classes/LoginCredentials';
import {Router} from '@angular/router';
import {LoginEventsService} from '../_services/login-events.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginCredentials = new LoginCredentials();

  isIncorrectLogin: boolean;

  constructor(
    private authService: AuthenticationService,
    private loginEvents: LoginEventsService,
    private router: Router,
  ) { }

  login() {
    this.authService
      .login(this.loginCredentials)
      .subscribe(
      () => {
          this.loginEvents.loginStateChanged();
          this.router.navigateByUrl('/');
        },
      () => {
          this.isIncorrectLogin = true;
        },
      );
  }

  ngOnInit() {
  }

}
