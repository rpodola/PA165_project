import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../_services/settings.service';
import {TrackingSettings} from '../_classes/TrackingSettings';

@Component({
  selector: 'app-tracking-settings',
  templateUrl: './tracking-settings.component.html',
  styleUrls: ['./tracking-settings.component.css']
})
export class TrackingSettingsComponent  implements OnInit {

  trackingSettings = new TrackingSettings();

  constructor(
    private userService: SettingsService,
  ) {
    this.trackingSettings.weeklyCaloriesGoal = 0;
  }

  getTrackingSettings() {
    this.userService
      .getTrackingSettings()
      .subscribe(trackingSettings => {
        this.trackingSettings = trackingSettings;
      });
  }

  saveTrackingSettings() {
    this.userService
      .saveTrackingSettings(this.trackingSettings)
      .subscribe(trackingSettings => this.trackingSettings = trackingSettings);
  }

  ngOnInit() {
    this.getTrackingSettings();
  }

}

