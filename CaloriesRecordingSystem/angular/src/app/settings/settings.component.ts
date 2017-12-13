import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../_classes/UserSettings';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userSettings = new UserSettings();

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
