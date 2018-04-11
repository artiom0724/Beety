import { Component, HostListener } from '@angular/core';
import { SideNavService } from '../../../../services/side-nav.service';
import { States } from '../../../../constant/states.constant';
import { MenuItem } from './menu-item.model';
import { KeyCodes } from '../../../../constant/key-codes.constants';


@Component({
  selector: 't-organization-side-nav',
  templateUrl: './organization-side-nav.component.html'
})
export class OrganizationSideNavComponent {
  readonly menuItems = [
    new MenuItem('Employees', ['/', States.ORGANIZATION, States.EMPLOYEES], 'person'),
    new MenuItem('Clients', ['/', States.ORGANIZATION, States.CLIENTS], 'people'),
    new MenuItem('Overview', ['/', States.ORGANIZATION, States.OVERVIEW], 'view_module'),
    new MenuItem('Analytics', ['/', States.ORGANIZATION, States.ANALYTICS], 'show_chart'),
    new MenuItem('Finance', ['/', States.ORGANIZATION, States.FINANCE], 'attach_money'),
    new MenuItem('Calculation of Salaries', ['/', States.ORGANIZATION, States.CALCULATION_OF_SALARIES], 'credit_card'),
    new MenuItem('Online Appointment', ['/', States.ORGANIZATION, States.ONLINE_APPOINTMENT], 'language'),
  ];

  constructor(private sideNavService: SideNavService) {
  }

  isShown(): boolean {
    return this.sideNavService.isShown();
  }

  close(): void {
    this.sideNavService.close();
  }
}
