import { NgModule } from '@angular/core';
import { PersonalDataFormComponent } from './personal-data-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PhoneInputModule } from '../../../../components/app-controls/phone-input/phone-input.module';
import { PasswordInputModule } from '../../../../components/app-controls/password-input/password-input.module';
import { AppSelectModule } from '../../../../components/app-controls/app-select/app-select.module';
import { AppInputModule } from '../../../../components/app-controls/app-input/app-input.module';

@NgModule({
  imports: [
    SharedModule,
    PhoneInputModule,
    AppInputModule,
    AppSelectModule,
    PasswordInputModule,
  ],
  declarations: [
    PersonalDataFormComponent
  ],
  exports: [
    PersonalDataFormComponent
  ]
})
export class PersonalDataFormModule {
}
