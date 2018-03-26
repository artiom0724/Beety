import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableMaterialButtonComponent } from './table-material-button.component';

import { LoginGuard } from '../../../guards/login.guard';

const loginRoutes: Routes = [
  {
    path: '',
    component: TableMaterialButtonComponent,
    data: {title: 'Beety'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule]
})

export class TableMaterialButtonRoutingModule {
}
