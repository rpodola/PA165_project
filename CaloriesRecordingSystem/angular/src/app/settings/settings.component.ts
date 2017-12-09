import { Component, OnInit } from '@angular/core';
import {IUserSettings} from '../../interfaces/IUserSettings';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userSettings: IUserSettings;

  constructor(
    private accountService: AccountService,
  ) { }

  getUserSettings() {
   /* this.accountService
      .getUserSettings()
      .subscribe(userSettings => this.userSettings = userSettings);*/
  }

  ngOnInit() {
   this.getUserSettings();
  }

}
