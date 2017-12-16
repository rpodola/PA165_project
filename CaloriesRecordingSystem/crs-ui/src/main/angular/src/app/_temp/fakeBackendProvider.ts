import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/observable/throw';
import {Category} from '../_classes/Category';

const categories: Category[] = [
  new Category(0, 'Exercise', 'Exercise is the best activity'),
  new Category(1, 'Aerobics'),
  new Category(2, 'Walking'),
  new Category(3, 'Running'),
  new Category(4, 'Swimming'),
  new Category(5, 'Work'),
  new Category(6, 'Work2'),
  new Category(7, 'Work3'),
  new Category(8, 'Work4'),
  new Category(9, 'Work5'),
  new Category(10, 'Work6'),
  new Category(11, 'Work7'),
  new Category(12, 'Work8'),
  new Category(13, 'Work9'),
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    // wrap in delayed observable to simulate server api call
    return of(null).mergeMap(() => {
      // authenticate
      if (request.url.endsWith('/auth/login') && request.method === 'POST') {
        // find if any user matches login credentials
        const filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            token: 'fake-jwt-token',
          };

          return of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return Observable.throw('Username or password is incorrect');
        }
      }

      // create user
      if (request.url.endsWith('/auth/register') && request.method === 'POST') {
        // get new user object from post body
        const newUser = request.body;

        // validation
        const usernameExists = users.filter(user => user.username === newUser.username).length;
        const emailExists = users.filter(user => user.email === newUser.email).length;
        if (usernameExists || emailExists) {
          return Observable.throw('Username or email is already taken');
        }

        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // respond 200 OK
        return of(new HttpResponse({ status: 200 }));
      }

      if (request.url.endsWith('activities/allCategories') && request.method === 'GET') {
        const body = {
          categories,
        };

        return of(new HttpResponse({ status: 200, body }));
      }

      const regexpCat = /activities\/category\/(\d+)/;
      const matchCat = regexpCat.exec(request.url);
      if (matchCat && request.method === 'GET') {
        const id = parseInt(matchCat[1], 10);
        const category = categories.find(cat => cat.id === id);

        if (category) {
          const body = {
            category,
          };

          return of(new HttpResponse({status: 200, body}));
        }

        return Observable.throw('Category doesnt exist');
      }

      // pass through any requests not handled above
      return next.handle(request);
    })
      .materialize()
      .delay(500)
      .dematerialize();
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
