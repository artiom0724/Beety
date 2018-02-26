import { NgModule } from '@angular/core';
import { PhoneInputComponent } from './phone-input.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    PhoneInputComponent
  ],
  exports: [
    PhoneInputComponent
  ]
})
export class PhoneInputModule {
}
