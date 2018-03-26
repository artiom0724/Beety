import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
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
