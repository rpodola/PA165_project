import { Injectable } from '@angular/core';
import {IUserSettings} from '../interfaces/IUserSettings';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class SettingsService {

  userSettings: IUserSettings = {
    email: 'Jozo@gmail.com',
    height: 170,
    weight: 80,
    name: 'Jozo',
    password: 'Jozis123',
    username: 'jozinator',
    birthday: new Date(),
  };

  constructor() { }

  getUserSettings(): Observable<IUserSettings> {
    return of(this.userSettings);
  }

}
