import {Component, OnInit} from '@angular/core';
import {AccountService} from '../_services/account.service';
import {RegisterSettings} from '../_classes/RegisterSettings';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerSettings = new RegisterSettings();

  usernameExists: boolean;
  emailExists: boolean;

  passwordRepeat: string;
  passwordsMatch: boolean;

  constructor(
    private accountService: AccountService,
  ) {
    this.registerSettings.birthday = new Date();
  }

  passwordChanged() {
    this.passwordsMatch = this.registerSettings.password === this.passwordRepeat;
  }

  ngOnInit() { }

  authenticate() {
    if (!this.usernameExists && !this.emailExists) {

    }
  }

  registerAccount() {
    this.accountService
      .loginExists({ username: this.registerSettings.username, email: this.registerSettings.email })
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
