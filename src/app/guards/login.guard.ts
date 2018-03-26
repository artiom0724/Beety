import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/security.service';
import { BasePageService } from '../services/base-page.service';

@Injectable()
export class LoginGuard implements CanActivate, CanLoad {

  constructor(private basePageService: BasePageService) {
  }

  canLoad(): boolean {
    return this.checkLogin();
  }

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (!AuthService.isLoggedIn()) {
      return true;
    }
    this.basePageService.navigateUser();
    return false;
  }
}
