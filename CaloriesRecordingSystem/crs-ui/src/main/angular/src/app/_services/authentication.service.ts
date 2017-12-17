import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginCredentials} from '../_classes/LoginCredentials';
import {RegisterSettings} from '../_classes/RegisterSettings';
import {Observable} from 'rxjs/Observable';
import jwt_decode from 'jwt-decode';
import 'rxjs/add/operator/map';

const prefix = '/auth/';
const loginUri = prefix + 'login';
const registerUri = prefix + 'register';

export interface IAuthToken {
  token: string;
}

export interface IRegisterResponse extends IAuthToken {
  usernameExists: boolean;
  emailExists: boolean;
}

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
  ) { }

  login(loginCredentials: LoginCredentials): Observable<IAuthToken> {
    return this.http
      .post<IAuthToken>(loginUri, loginCredentials)
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

  register(registerDetails: RegisterSettings): Observable<IRegisterResponse> {
    return this.http
      .post<IRegisterResponse>(registerUri, registerDetails)
      .map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
        }

        return response;
      });
  }

  isUserAdmin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.isAdmin;
  }

  isUserLoggedIn() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //  temporary fake access
    if (0 === 0) { return currentUser !== null; }

    if (currentUser && currentUser.token) {
      //  check expiration
      let claims;
      try {
        claims = jwt_decode(currentUser.token);
      } catch {
        return false;
      }

      const { exp } = claims;

      //  expiration
      if (exp) {
        return claims.exp >= (Date.now() / 1000);
      }
    }

    return false;
  }
}
