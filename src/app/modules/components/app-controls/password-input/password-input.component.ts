import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 't-password-input',
  templateUrl: './password-input.component.html'
})
export class PasswordInputComponent {
  @Input() label: string;
  @Input() control: AbstractControl;

  isPassword = true;
}
