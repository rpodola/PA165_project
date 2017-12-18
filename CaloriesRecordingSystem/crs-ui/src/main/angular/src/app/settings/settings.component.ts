import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../_classes/UserSettings';
import {SettingsService} from '../_services/settings.service';

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
    private settingsService: SettingsService,
  ) {
    this.userSettings.weight = 1;
    this.userSettings.height = 1;
  }

  passwordChanged() {
    this.passwordsMatch = this.userSettings.password === this.passwordConfirm;
  }

  getUserSettings() {
    this.settingsService
      .getUserSettings()
      .subscribe(userSettings => {
        this.passwordOld = '';
        this.passwordConfirm = '';
        this.userSettings = { ...userSettings, password: undefined };
      });
  }

  saveSettings() {
    this.settingsService
      .saveUserSettings(this.userSettings)
      .subscribe(userSettings => {
        this.passwordOld = '';
        this.passwordConfirm = '';
        this.userSettings = { ...userSettings, password: undefined };
      });
  }

  ngOnInit() {
   this.getUserSettings();
  }

}
