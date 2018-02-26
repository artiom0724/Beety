import { Component } from '@angular/core';
import { createPasswordValidator } from '../../../../../validation/password.validator';
import { createPhoneValidator } from '../../../../../validation/phone.validator';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormValidators } from '../../../../../validation/form-validators';
import { createEmailValidator } from '../../../../../validation/email.validator';
import { SUPPORTED_COUNTRIES } from '../../../../../data/supported-counties';
import { CountryCode } from 'libphonenumber-js';
import { FormConstants } from '../../../../../constant/form.constants';

@Component({
  selector: 't-personal-data-form',
  templateUrl: './personal-data-form.component.html'
})
export class PersonalDataFormComponent {
  readonly formConstants = FormConstants;

  form: FormGroup;
  readonly firstName = new FormControl('', [
    FormValidators.required(this.formConstants.FIRST_NAME_VALIDATION_LABEL),
    FormValidators.alphabetic(this.formConstants.FIRST_NAME_VALIDATION_LABEL),
    FormValidators.lengthRange(2, 50, this.formConstants.FIRST_NAME_VALIDATION_LABEL)
  ]);
  readonly lastName = new FormControl('', [
    FormValidators.required(this.formConstants.LAST_NAME_VALIDATION_LABEL),
    FormValidators.alphabetic(this.formConstants.LAST_NAME_VALIDATION_LABEL),
    FormValidators.lengthRange(2, 50, this.formConstants.LAST_NAME_VALIDATION_LABEL)
  ]);
  readonly middleName = new FormControl('', [
    FormValidators.required(this.formConstants.MIDDLE_NAME_VALIDATION_LABEL),
    FormValidators.alphabetic(this.formConstants.MIDDLE_NAME_VALIDATION_LABEL),
    FormValidators.lengthRange(2, 50, this.formConstants.MIDDLE_NAME_VALIDATION_LABEL)
  ]);
  readonly phone = new FormControl('', createPhoneValidator());
  readonly email = new FormControl('', createEmailValidator());
  readonly password = new FormControl('', createPasswordValidator(this.formConstants.PASSWORD_VALIDATION_LABEL));

  constructor(private fb: FormBuilder) {
    // Eagerly initialize form, cause it's used in parent component
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      phone: this.phone,
      email: this.email,
      password: this.password
    });
  }

  getInitialCountry(): CountryCode {
    return SUPPORTED_COUNTRIES[0];
  }
}
