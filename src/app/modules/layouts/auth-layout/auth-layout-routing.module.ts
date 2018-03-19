import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationAuthLayoutComponent } from './auth-layout.component';
import { States } from '../../../constant/states.constant';

const configurationAuthLayoutRoutes: Routes = [
  {
    path: '',
    component: ConfigurationAuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: States.START,
      },
      {
        path: States.START,
        loadChildren: '../../sections/start-page/start-page.module#StartPageModule',
      },
      {
        path: States.REGISTRATION,
        loadChildren: '../../sections/registration/registration.module#RegistrationModule',
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

export class AuthLayoutRoutingModule {
}
