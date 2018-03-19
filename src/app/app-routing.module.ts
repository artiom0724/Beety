import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from './constant/states.constant';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: States.AUTH,
    loadChildren: './modules/layouts/auth-layout/auth-layout.module#AuthLayoutModule',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
  },
  {
    path: States.ORGANIZATION,
    loadChildren: './modules/layouts/organization-layout/organization-layout.module#OrganizationLayoutModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: States.AUTH,
    pathMatch: 'full'
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
