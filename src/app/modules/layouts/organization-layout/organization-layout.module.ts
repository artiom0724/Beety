import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLayoutRoutingModule } from './organization-layout-routing.module';

import { ConfigurationMainLayoutComponent } from './organization-layout.component';
import { MainHeaderModule } from './main-header/main-header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { OrganizationSideNavModule } from './organization-side-nav/organization-side-nav.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationLayoutRoutingModule,
    OrganizationSideNavModule,
    MainHeaderModule,
    FooterModule,
  ],
  declarations: [
    ConfigurationMainLayoutComponent
  ]
})
export class OrganizationLayoutModule {
}
