import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormValidators } from '../../../../../validation/form-validators';
import { RoleConstants } from '../../../../../constant/role.constants';
import { FormConstants } from '../../../../../constant/form.constants';
import { ROLE_OPTIONS } from '../../../../../data/roles';
import { SERVICES } from '../../../../../data/services';
import * as _ from 'lodash';
import { createUpnValidator } from '../../../../../validation/upn.validator';

@Component({
  selector: 't-role-form',
  templateUrl: './role-form.component.html'
})
export class RoleFormComponent implements OnInit {
  readonly formConstants = FormConstants;

  form: FormGroup;
  readonly role = new FormControl('', FormValidators.required(this.formConstants.ROLE_VALIDATION_LABEL));

  serviceOptions: string[];
  readonly roles = Object.keys(ROLE_OPTIONS);
  readonly roleOptions = _.values(ROLE_OPTIONS);
  readonly controlNames = {
    COMPANY_NAME: 'companyName',
    COMPANY_UPN: 'companyUpn',
    SERVICES: 'services',
  };

  constructor(fb: FormBuilder) {
    // Eagerly initialize form, cause it's used in parent component
    this.form = fb.group({
      role: this.role
    });
  }

  ngOnInit(): void {
    this.role.valueChanges.subscribe(this.onRoleChange);
  }

  private onRoleChange = (role: string): void => {
    _.values(this.controlNames).forEach(control => this.form.removeControl(control));
    this.serviceOptions = SERVICES[role];
    if (role === RoleConstants.PRIVATOR || role === RoleConstants.ORGANIZATION) {
      this.form.addControl(
        this.controlNames.SERVICES,
        new FormControl('', FormValidators.required(this.formConstants.SERVICES_VALIDATION_LABEL))
      );
    }
    if (role === RoleConstants.ORGANIZATION) {
      this.form.addControl(
        this.controlNames.COMPANY_NAME,
        new FormControl('', [
          FormValidators.required(this.formConstants.COMPANY_NAME_VALIDATION_LABEL),
          FormValidators.lengthRange(2, 50, this.formConstants.COMPANY_NAME_VALIDATION_LABEL)
        ])
      );
      this.form.addControl(this.controlNames.COMPANY_UPN,
        new FormControl('', createUpnValidator())
      );
    }
  }
}
