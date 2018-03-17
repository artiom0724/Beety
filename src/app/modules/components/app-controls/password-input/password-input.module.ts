import { NgModule } from '@angular/core';
import { PasswordInputComponent } from './password-input.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    PasswordInputComponent
  ],
  exports: [
    PasswordInputComponent
  ]
})
export class PasswordInputModule {
}
