import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/security.service';
import { Title } from '@angular/platform-browser';
import { SideNavService } from '../../../../services/side-nav.service';

@Component({
  selector: 't-main-header',
  templateUrl: './main-header.component.html'
})
export class MainHeaderComponent {
  constructor(private authService: AuthService,
              private titleService: Title,
              private sideNavService: SideNavService) {
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  toggleSideNav(): void {
    this.sideNavService.toggle();
  }

  logout(): void {
    this.authService.logOutWithMessage();
  }
}
