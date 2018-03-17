import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { CountryCallingCode, CountryCode, getCountryCallingCode } from 'libphonenumber-js';
import * as phoneNumberExamples from 'libphonenumber-js/examples.mobile.json';
import { FormConstants } from '../../../../constant/form.constants';

@Component({
  selector: 't-phone-input',
  templateUrl: './phone-input.component.html'
})
export class PhoneInputComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() initialCountry: CountryCode;

  currentCountry: CountryCode;
  readonly phone = new FormControl();
  readonly formConstants = FormConstants;

  ngOnInit(): void {
    this.currentCountry = this.initialCountry;
    this.phone.setValue(this.control.value);
    this.phone.valueChanges.subscribe(value => this.control.setValue(this.code + value));
    this.control.statusChanges.subscribe(() => this.phone.setErrors(this.control.errors));
  }

  get code(): CountryCallingCode {
    return `+${getCountryCallingCode(this.currentCountry)}`;
  }

  get placeholder(): string {
    return phoneNumberExamples[this.currentCountry];
  }
}
