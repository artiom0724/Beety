import { Injectable } from '@angular/core';
import { AuthConstants } from '../constant/auth.constant';
import { States } from '../constant/states.constant';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  static isLoggedIn(): boolean {
    return !!localStorage.getItem(AuthConstants.AUTH_TOKEN_NAME);
  }

  constructor(private router: Router) {
  }

  logOutWithMessage(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.logOut();
    }
  }

  logOut(): void {
    // TODO: Remove this, it's just a mock
    localStorage.removeItem(AuthConstants.AUTH_TOKEN_NAME);
    this.router.navigate([States.AUTH, States.START]);
  }
}
