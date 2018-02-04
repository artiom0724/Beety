import { Injectable, NgModule } from '@angular/core';
import {
  Routes, RouterModule, NavigationStart, Router, CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { States } from './constant/states.constant';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: States.AUTH,
    loadChildren: './modules/layouts/configuration-auth-layout/configuration-auth-layout.module#ConfigurationAuthLayoutModule'
  },
  {
    path: '',
    loadChildren: './modules/layouts/configuration-main-layout/configuration-main-layout.module#ConfigurationMainLayoutModule',
    canLoad: [ AuthGuard ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: States.LOGIN
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
