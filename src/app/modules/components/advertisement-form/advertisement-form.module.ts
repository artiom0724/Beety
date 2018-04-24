import { NgModule } from '@angular/core';
import { AdvertisementFormComponent } from './advertisement-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { PhoneInputModule } from '../app-controls/phone-input/phone-input.module';
import { AppInputModule } from '../app-controls/app-input/app-input.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    PhoneInputModule,
    AppInputModule,
  ],
  declarations: [
    AdvertisementFormComponent
  ],
  entryComponents: [
    AdvertisementFormComponent
  ]
})
export class AdvertisementFormModule {
}
