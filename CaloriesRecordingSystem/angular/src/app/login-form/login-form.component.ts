import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public nameOrEmail: string;
  public password: string;

  constructor(
    private accountService: AccountService
  ) { }

  login() {
    this.accountService
      .loginIsValid({ login: this.nameOrEmail, password: this.password })
      .subscribe(isValid => null);
  }

  ngOnInit() {
  }

}
