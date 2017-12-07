import { Component, OnInit } from '@angular/core';
import {IUserSettings} from '../../interfaces/IUserSettings';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userSettings: IUserSettings;

  male = true;

  wrongUsername: boolean;
  wrongUsernameMessage = 'Wrong username';

  wrongEmail: boolean;
  wrongEmailMessage = 'Wrong email';

  wrongPassword: boolean;
  wrongPasswordMessage = 'Wrong password';

  passwordsDontMatch: boolean;
  passwordsDontMatchMessage = 'Passwords don\'t match';

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.getUserSettings().subscribe(st => this.userSettings = st);
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
