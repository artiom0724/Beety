import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import { MaterialModule } from '../../../shared/material.module';
import { AdvertisementFormModule } from '../../../components/advertisement-form/advertisement-form.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdvertisementFormModule,
  ],
  declarations: [
    MainHeaderComponent
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class MainHeaderModule {
}
