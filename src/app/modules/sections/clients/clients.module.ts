import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientService } from './clients.service';
import { MaterialModule } from './../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
  ],
  declarations: [
      ClientsComponent,
      ClientListComponent,
      ClientDetailComponent,
    ],
  entryComponents: [
    ClientDetailComponent,
  ],
  providers: [
    ClientService
  ],
})
export class ClientsModule {
}