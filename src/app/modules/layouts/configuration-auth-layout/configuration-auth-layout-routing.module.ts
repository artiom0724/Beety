import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationAuthLayoutComponent } from './configuration-auth-layout.component';
import { States } from '../../../constant/states.constant';

const configurationAuthLayoutRoutes: Routes = [
  {
    path: '',
    component: ConfigurationAuthLayoutComponent,
    children: [
      {
        path: States.START_PAGE,
        loadChildren: '../../sections/start-page/start-page.module#StartPageModule'
      },
      {
        path: '',
        redirectTo: States.START_PAGE,
        pathMatch: 'full'
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
