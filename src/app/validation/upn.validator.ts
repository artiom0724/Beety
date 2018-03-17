import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { FormValidators } from './form-validators';
import { ValidationMessages } from './validation-messages';
import { ValidationError } from './validation-error';
import { FormConstants } from '../constant/form.constants';

const upnIndexes = [29, 23, 19, 17, 13, 7, 5, 3, 0];

export function createUpnValidator(): ValidatorFn {
  const validationMessage = ValidationMessages.upn();
  const validator = (control: AbstractControl) => {
    const upnValue = control.value.split('');
    const checksum = upnValue.reduce((accum, value, index) => accum + Number(value) * upnIndexes[index], 0) % 11;
    if (checksum !== Number(upnValue[8])) {
      return new ValidationError(validationMessage);
    }
  };
  return Validators.compose([
      FormValidators.required(FormConstants.COMPANY_UPN_VALIDATION_LABEL),
      validator,
      FormValidators.lengthRange(9, 9, FormConstants.COMPANY_UPN_VALIDATION_LABEL)
    ]
  );
}
