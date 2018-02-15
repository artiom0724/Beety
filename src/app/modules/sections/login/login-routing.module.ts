import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../../../guards/login.guard';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent, canActivate: [ LoginGuard ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {

}
