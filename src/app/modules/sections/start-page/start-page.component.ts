import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { States } from '../../../constant/states.constant';

@Component({
  selector: 't-start-page',
  styleUrls: ['start-page.component.scss'],
  templateUrl: './start-page.component.html',
  encapsulation: ViewEncapsulation.Native,
})

export class StartPageComponent {
  constructor(private router: Router) {
  }

  goToRegistration(): void {
    this.router.navigate([States.AUTH, States.REGISTRATION]);
  }
}
