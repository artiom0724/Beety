import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SUPPORTED_COUNTRIES } from '../../../../data/supported-counties';
import { GeoService } from '../../../../services/geo.service';
import { PersonalDataFormComponent } from './personal-data-form/personal-data-form.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { Beety } from '../../../../../custom_typings/typings';
import IpInfo = Beety.IpInfo;

@Component({
  selector: 't-registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {
  @ViewChild(PersonalDataFormComponent) personalDataForm: PersonalDataFormComponent;
  @ViewChild(RoleFormComponent) roleForm: RoleFormComponent;

  constructor(private snackBar: MatSnackBar,
              private geoService: GeoService) {
  }

  ngOnInit(): void {
    this.checkCountry();
  }

  onDone(): void {
    const value = {
      ...this.roleForm.form.value,
      ...this.personalDataForm.form.value,
    };
  }

  private checkCountry(): void {
    this.geoService.getIpInfo().subscribe((ipInfo: IpInfo) => {
      if (SUPPORTED_COUNTRIES.indexOf(ipInfo.country) < 0) {
        this.snackBar.open(
          `Look like registration from ${ipInfo.country_name} is not supported now.\n` +
          'Sorry for the inconvenience! If you are using VPN or we were wrong just go ahead!',
          'Ok'
        );
      }
    });
  }
}
