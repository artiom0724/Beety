import { NgModule } from '@angular/core';
import { AppInputComponent } from './app-input.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    AppInputComponent
  ],
  exports: [
    AppInputComponent
  ]
})
export class AppInputModule {
}
