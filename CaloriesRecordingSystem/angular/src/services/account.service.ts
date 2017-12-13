import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Account} from '../app/_classes/Account';

@Injectable()
export class AccountService {

  accounts: Account[] = [
    {
      id: 0,
      username: 'jozo',
      email: 'jozo@gmail.com',
      password: 'jozo',
    },
    {
      id: 1,
      username: 'milan',
      email: 'milan@gmail.com',
      password: 'jozo',
    },
  ];

  constructor() { }

  loginExists({ username, email }): Observable<{ usernameExists: boolean, emailExists: boolean }> {
    const usernameExists = this.accounts.findIndex(a => a.username === username) !== -1;
    const emailExists = this.accounts.findIndex(a => a.email === email) !== -1;

    return of({ usernameExists, emailExists });
  }

  loginIsValid({ login, password }): Observable<boolean> {
    return of(this.accounts.findIndex(a => (a.username === login || a.email === login) && a.password === password) !== -1);
  }

}
