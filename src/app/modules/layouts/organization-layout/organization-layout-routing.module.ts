import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../../../constant/states.constant';

import { ConfigurationMainLayoutComponent } from './organization-layout.component';
import { EmployeesModule } from '../../sections/employees/employees.module';
import { ClientsModule } from '../../sections/clients/clients.module';

const configurationMainLayoutRoutes: Routes = [
  {
    path: '',
    component: ConfigurationMainLayoutComponent,
    children: [
      {
        path: States.EMPLOYEES,
        loadChildren: '../../sections/employees/employees.module#EmployeesModule',
      },
      {
        path: States.CLIENTS,
        loadChildren: '../../sections/clients/clients.module#ClientsModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(configurationMainLayoutRoutes)
  ],
  exports: [RouterModule]
})
export class OrganizationLayoutRoutingModule {

}
