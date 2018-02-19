import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from './start-page.component';

import { LoginGuard } from '../../../guards/login.guard';

const loginRoutes: Routes = [
  {path: '', component: StartPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [ RouterModule ]
})

export class StartPageRoutingModule {
}