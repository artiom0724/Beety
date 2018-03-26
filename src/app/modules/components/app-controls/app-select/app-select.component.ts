import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 't-app-select',
  templateUrl: './app-select.component.html'
})
export class AppSelectComponent {
  @Input() label: string;
  @Input() values: string[];
  @Input() options: string[];
  @Input() required = false;
  @Input() control: AbstractControl;
}
