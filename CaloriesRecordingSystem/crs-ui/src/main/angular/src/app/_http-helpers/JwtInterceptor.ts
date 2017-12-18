import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';

const backend = 'http://localhost:8080/pa165/rest';

@Injectable()
class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin',
    };

    if (currentUser && currentUser.token) {
      headers['Authorization'] = `Bearer ${currentUser.token}`;

      request = request.clone({
        setHeaders: headers,
      });
    }

    //  inject backend base url
    request = request.clone({
      url: backend + request.url
    });

    return next
      .handle(request)
      .do(
        null,
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 403) {
              this.router.navigateByUrl('/login');
            }
          }
        }
      );
  }
}

export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};
