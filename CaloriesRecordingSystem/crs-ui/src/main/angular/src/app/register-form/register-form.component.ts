import {Component, OnInit} from '@angular/core';
import {RegisterSettings} from '../_classes/RegisterSettings';
import {dateToDDMMYYYY} from '../_utils/DateUtils';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {LoginEventsService} from '../_services/login-events.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerSettings = new RegisterSettings();
  birthday: Date;
  usernameExists: boolean;
  emailExists: boolean;

  passwordRepeat: string;
  passwordsMatch: boolean;

  constructor(
    private authService: AuthenticationService,
    private loginEvents: LoginEventsService,
    private router: Router,
  ) {
    this.registerSettings.male = true;
    this.registerSettings.weight = 1;
    this.registerSettings.height = 1;
    this.birthday = new Date();
  }

  passwordChanged() {
    this.passwordsMatch = this.registerSettings.password === this.passwordRepeat;
  }

  ngOnInit() { }

  registerAccount() {
    this.registerSettings.birthday = dateToDDMMYYYY(this.birthday);

    this.authService
      .register(this.registerSettings)
      .subscribe(response => {
        this.emailExists = response.emailExists;
        this.usernameExists = response.usernameExists;

        if (!this.usernameExists && !this.emailExists) {
          this.loginEvents.loginStateChanged();
          this.router.navigateByUrl('/');
        }
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
