import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { States } from '../constant/states.constant';

@Injectable()
export class BasePageService {
  constructor(private router: Router) {
  }

  navigateUser(): void {
    this.router.navigate([States.ORGANIZATION, States.EMPLOYEES]);
  }
}
