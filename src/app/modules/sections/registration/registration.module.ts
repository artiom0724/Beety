import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { RegistrationFormModule } from './registration-form/registration-form.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    RegistrationFormModule,
    MaterialModule,
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {
}
