import { Component, OnInit } from '@angular/core';
import {IUserSettings} from '../../interfaces/IUserSettings';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userSettings: IUserSettings;

  constructor(
    private settingsService: SettingsService,
  ) { }

  getUserSettings() {
    this.settingsService
      .getUserSettings()
      .subscribe(userSettings => this.userSettings = userSettings);
  }

  ngOnInit() {
   this.getUserSettings();
  }

}
