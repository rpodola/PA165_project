import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginCredentials} from '../_classes/LoginCredentials';
import {RegisterSettings} from '../_classes/RegisterSettings';
import {AuthenticatedUser} from '../_classes/AuthenticatedUser';

const prefix = 'auth/';
const loginUri = prefix + 'login';
const registerUri = prefix + 'register';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
  ) { }

  login(loginCredentials: LoginCredentials) {
    return this.http
      .post<AuthenticatedUser>(loginUri, loginCredentials)
      .map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(registerDetails: RegisterSettings) {
    return this.http
      .post<AuthenticatedUser>(registerUri, registerDetails)
      .map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }
}
