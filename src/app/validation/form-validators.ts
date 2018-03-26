import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { ValidationError } from './validation-error';
import { ValidationMessages } from './validation-messages';

export const createValidator = (validator: ValidatorFn, validationMessage: string): ValidatorFn =>
  (formControl: FormControl) => {
    if (validator(formControl)) {
      return new ValidationError(validationMessage);
    }
  };


export class FormValidators {
  private static ALPHABETIC_REGEX = /^[a-zA-Z]*$/i;

  static required(label: string): ValidatorFn {
    const validationMessage = ValidationMessages.required(label);
    const validator = Validators.required;
    return createValidator(validator, validationMessage);
  }

  static alphabetic(label: string): ValidatorFn {
    return FormValidators.pattern(FormValidators.ALPHABETIC_REGEX, label);
  }

  static lengthRange(min: number, max: number, label: string): ValidatorFn {
    const validationMessage = ValidationMessages.lengthRange(label, min, max);
    const validator = this.makeLengthRangeValidator(min, max);
    return createValidator(validator, validationMessage);
  }

  static pattern(pattern: (string | RegExp), label: string): ValidatorFn {
    const validationMessage = ValidationMessages.incorrectSymbols(label);
    const validator = Validators.pattern(pattern);
    return createValidator(validator, validationMessage);
  }

  private static readonly makeLengthRangeValidator = (min: number, max: number): ValidatorFn => Validators.compose([
    Validators.minLength(min),
    Validators.maxLength(max)
  ])
}
