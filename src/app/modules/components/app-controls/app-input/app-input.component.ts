import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 't-app-input',
  templateUrl: './app-input.component.html'
})
export class AppInputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required = false;
  @Input() control: AbstractControl;
}
