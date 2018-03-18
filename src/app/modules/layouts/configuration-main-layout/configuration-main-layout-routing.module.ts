import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../../../constant/states.constant';

import { ConfigurationMainLayoutComponent } from './configuration-main-layout.component';

const configurationMainLayoutRoutes: Routes = [
  {
    path: '',
    component: ConfigurationMainLayoutComponent,
    children: [
      {
        path: States.PAGE,
        loadChildren: '../../sections/page/page.module#PageModule',
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
export class ConfigurationMainLayoutRoutingModule {

}
