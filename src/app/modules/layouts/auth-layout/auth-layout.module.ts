import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

import { ConfigurationAuthLayoutComponent } from './auth-layout.component';
import { AuthHeaderModule } from './auth-header/auth-header.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    AuthHeaderModule,
    FooterModule,
  ],
  declarations: [
    ConfigurationAuthLayoutComponent,
  ]
})

export class AuthLayoutModule {
}
