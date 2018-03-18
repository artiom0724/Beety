import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { States } from '../constant/states.constant';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private securityService: SecurityService,
              private router: Router) {
  }

  canLoad(): boolean {
    return this.checkLogin();
  }

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.securityService.isLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl(States.START);
    return false;
  }
}
