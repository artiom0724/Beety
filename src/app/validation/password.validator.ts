import { ValidatorFn, Validators } from '@angular/forms';
import { FormValidators } from './form-validators';

const PASSWORD_REGEX = /^[0-9a-zA-Z.\-_%+]*$/i;

export function createPasswordValidator(label: string): ValidatorFn {
    return Validators.compose([
        FormValidators.required(label),
        FormValidators.lengthRange(8, 40, label),
        FormValidators.pattern(PASSWORD_REGEX, label)
    ]);
}
