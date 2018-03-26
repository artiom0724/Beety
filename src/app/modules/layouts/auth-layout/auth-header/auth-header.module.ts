import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthHeaderComponent } from './auth-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AuthHeaderComponent,
  ],
  exports: [
    AuthHeaderComponent,
  ]
})

export class AuthHeaderModule {
}