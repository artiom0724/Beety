import { Component, ViewEncapsulation } from '@angular/core';
import { BasePageService } from '../../../../services/base-page.service';
import { AuthConstants } from '../../../../constant/auth.constant';

@Component({
  selector: 't-auth-header',
  styleUrls: ['../../../sections/start-page/start-page.component.scss', 'auth-header.component.scss'],
  templateUrl: './auth-header.component.html',
  encapsulation: ViewEncapsulation.Native,
})

export class AuthHeaderComponent {
  constructor(private basePageService: BasePageService) {
  }

  login(): void {
    // TODO: Remove this, it's just a mock
    localStorage.setItem(AuthConstants.AUTH_TOKEN_NAME, 'test');
    this.basePageService.navigateUser();
  }
}
