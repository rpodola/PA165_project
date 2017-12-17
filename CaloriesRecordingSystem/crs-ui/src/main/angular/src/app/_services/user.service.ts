import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IUserSettings} from '../_interfaces/IUserSettings';
import {UserSettings} from '../_classes/UserSettings';

const prefix = '/users/';

const settings = prefix + 'settings';
const updateSettings = prefix + 'update';

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
}
