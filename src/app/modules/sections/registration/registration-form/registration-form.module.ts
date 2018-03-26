import { NgModule } from '@angular/core';
import { RegistrationFormComponent } from './registration-form.component';
import { MaterialModule } from '../../../shared/material.module';
import { PersonalDataFormModule } from './personal-data-form/personal-data-form.module';
import { RoleFormModule } from './role-form/role-form.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PersonalDataFormModule,
    RoleFormModule,
  ],
  declarations: [
    RegistrationFormComponent
  ],
  exports: [
    RegistrationFormComponent
  ]
})
export class RegistrationFormModule {
}
