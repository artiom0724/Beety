import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SecurityService } from './security.service';
import { GeoService } from './geo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SecurityService,
    GeoService
  ]
})
export class ServicesModule {
}
