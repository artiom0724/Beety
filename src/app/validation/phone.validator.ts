import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { ValidationMessages } from './validation-messages';
import { FormValidators } from './form-validators';
import { ValidationError } from './validation-error';
import { FormConstants } from '../constant/form.constants';
import * as custom from 'libphonenumber-js/custom';
import * as restrictedMetadata from 'libphonenumber-js/metadata.restricted.json';

function isValidNumber(...args) {
  const parameters = Array.prototype.slice.call(arguments);
  parameters.push(restrictedMetadata);
  return custom.isValidNumber.apply(this, parameters);
}

export function createPhoneValidator(): ValidatorFn {
  const validationMessage = ValidationMessages.phone();
  const validator = (control: AbstractControl) => {
    if (!isValidNumber(control.value, restrictedMetadata)) {
      return new ValidationError(validationMessage);
    }
  };
  return Validators.compose([
    FormValidators.required(FormConstants.PHONE_VALIDATION_LABEL),
    validator
  ]);
}
