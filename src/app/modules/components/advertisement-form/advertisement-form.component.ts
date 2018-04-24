import { Component, OnInit } from '@angular/core';
import { FormConstants } from '../../../constant/form.constants';
import { createPhoneValidator } from '../../../validation/phone.validator';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormValidators } from '../../../validation/form-validators';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CountryCode } from 'libphonenumber-js';
import { SUPPORTED_COUNTRIES } from '../../../data/supported-counties';

@Component({
  selector: 't-advertisement-form',
  templateUrl: './advertisement-form.component.html',
})
export class AdvertisementFormComponent implements OnInit {
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
  readonly contactPhone = new FormControl('', createPhoneValidator());
  readonly description = new FormControl('');

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AdvertisementFormComponent>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      contactPhone: this.contactPhone,
      description: this.description,
    });
  }

  onDone(): void {
    this.dialogRef.close();
    this.snackBar.open('Заявка успешно отправлена, ожидайте ответа в течении 1-2 дней', 'Ok');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getInitialCountry(): CountryCode {
    return SUPPORTED_COUNTRIES[0];
  }
}
