import { NgModule } from '@angular/core';
import { AppSelectComponent } from './app-select.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    AppSelectComponent
  ],
  exports: [
    AppSelectComponent
  ]
})
export class AppSelectModule {
}
