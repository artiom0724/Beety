import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './security.service';
import { GeoService } from './geo.service';
import { BasePageService } from './base-page.service';
import { SideNavService } from './side-nav.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    GeoService,
    BasePageService,
    SideNavService,
  ]
})
export class ServicesModule {
}
