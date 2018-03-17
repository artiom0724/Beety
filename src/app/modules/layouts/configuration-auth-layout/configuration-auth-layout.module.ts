import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationAuthLayoutRoutingModule } from './configuration-auth-layout-routing.module';

import { ConfigurationAuthLayoutComponent } from './configuration-auth-layout.component';
import { AuthHeaderModule } from './auth-header/auth-header.module';
import { AuthFooterModule } from './auth-footer/auth-footer.module';
import { StartPageModule } from '../../sections/start-page/start-page.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigurationAuthLayoutRoutingModule,
    AuthHeaderModule,
    AuthFooterModule,
  ],
  declarations: [
    ConfigurationAuthLayoutComponent,
  ]
})

export class ConfigurationAuthLayoutModule {
}
