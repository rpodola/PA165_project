import {Component, OnInit} from '@angular/core';
import {RegisterSettings} from '../_classes/RegisterSettings';
import {dateToIMyDate} from '../_utils/DateUtils';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {LoginEventsService} from '../_services/login-events.service';
import { IMyInputFieldChanged, INgxMyDpOptions } from 'ngx-mydatepicker';

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

  birthday: string;
  isDateValid: boolean;

  datePickerOptions: INgxMyDpOptions = {
    dateFormat: 'dd-mm-yyyy',
    disableSince: dateToIMyDate(new Date()),
  };

  constructor(
    private authService: AuthenticationService,
    private loginEvents: LoginEventsService,
    private router: Router,
  ) {
    this.registerSettings.male = true;
    this.registerSettings.weight = 1;
    this.registerSettings.height = 1;
  }

  passwordChanged() {
    this.passwordsMatch = this.registerSettings.password === this.passwordRepeat;
  }

  ngOnInit() { }

  registerAccount() {
    this.registerSettings.birthday = this.birthday;

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

  onInputFieldChanged(event: IMyInputFieldChanged) {
    this.isDateValid = event.valid;
    this.birthday = event.value;
  }
}
