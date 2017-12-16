import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../_classes/UserSettings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userSettings = new UserSettings();

  passwordOld: string;
  passwordConfirm: string;

  passwordsMatch: boolean;

  oldPasswordIsWrong: boolean;

  constructor(
  ) {
    this.userSettings.weight = 1;
    this.userSettings.height = 1;
  }

  passwordChanged() {
    this.passwordsMatch = this.userSettings.password === this.passwordConfirm;
  }

  getUserSettings() {
   /* this.accountService
      .getUserSettings()
      .subscribe(userSettings => this.userSettings = userSettings);*/
  }

  ngOnInit() {
   this.getUserSettings();
  }

}
