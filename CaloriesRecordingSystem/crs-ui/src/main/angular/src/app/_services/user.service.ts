import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IUserSettings} from '../_interfaces/IUserSettings';
import {UserSettings} from '../_classes/UserSettings';
import {ITrackingSettings} from '../_interfaces/ITrackingSettings';
import {TrackingSettings} from '../_classes/TrackingSettings';

const prefix = '/users/';

const settings = prefix + 'settings';
const updateSettings = prefix + 'update';

const trackingSettings = prefix + 'trackingSettings';
const updateTrackingSettings = prefix + 'updateTrackingSettings';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
  ) {}

  getUserSettings(): Observable<IUserSettings> {
    return this.http
      .get<IUserSettings>(settings);
  }

  saveUserSettings(newSettings: UserSettings): Observable<IUserSettings> {
    return this.http
      .post<IUserSettings>(updateSettings, newSettings);
  }

  getTrackingSettings(): Observable<ITrackingSettings> {
    return this.http
      .get<ITrackingSettings>(trackingSettings);
  }

  saveTrackingSettings(newSettings: TrackingSettings): Observable<ITrackingSettings> {
    return this.http
      .post<ITrackingSettings>(updateTrackingSettings, newSettings);
  }
}
