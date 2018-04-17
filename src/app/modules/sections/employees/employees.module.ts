import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { Employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesService } from './employees.service';
import { MaterialModule } from './../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeListComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule {
}
