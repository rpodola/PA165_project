import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class UserIsAdminGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
  ) {}

  canActivate() {
    console.log('admin requested');
    return this.authService.isUserAdmin();
  }

}
