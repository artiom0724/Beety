import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationAuthLayoutComponent } from './configuration-auth-layout.component';

const configurationAuthLayoutRoutes: Routes = [
  {
    path: '',
    component: ConfigurationAuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: '../../sections/login/login.module#LoginModule'
      },
      {
        path: 'registration',
        loadChildren: '../../sections/registration/registration.module#RegistrationModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(configurationAuthLayoutRoutes)
  ],
  exports: [RouterModule]
})
export class ConfigurationAuthLayoutRoutingModule {

}
