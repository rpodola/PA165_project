import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {

  male = true;
  name: string;
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
  birthday = new Date();

  usernameExists: boolean;
  emailExists: boolean;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit() { }

  authenticate() {
    if (!this.usernameExists && !this.emailExists) {

    }
  }

  registerAccount() {
    this.accountService
      .loginExists({ username: this.username, email: this.email })
      .subscribe(result => {
        this.emailExists = result.emailExists;
        this.usernameExists = result.usernameExists;

        this.authenticate();
      });
  }

  /**
   * Required hack to override datepicker position which is implicitly under other components :/
   */
  overridePopupWindowStyle(): void {
    const el = document.getElementsByClassName('ngx-datepicker-calendar-container');

    if (el.length > 0) {
      el[0]['style']['marginLeft'] = '75px';
    }
  }

}
