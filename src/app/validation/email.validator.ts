import { ValidatorFn, Validators } from '@angular/forms';
import { ValidationMessages } from './validation-messages';
import { createValidator, FormValidators } from './form-validators';
import { FormConstants } from '../constant/form.constants';

const EMAIL_REGEX = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/i;

export function createEmailValidator(): ValidatorFn {
  const validationMessage = ValidationMessages.email();
  const validator = Validators.pattern(EMAIL_REGEX);
  return Validators.compose([
    FormValidators.required(FormConstants.EMAIL_VALIDATION_LABEL),
    createValidator(validator, validationMessage)
  ]);
}

