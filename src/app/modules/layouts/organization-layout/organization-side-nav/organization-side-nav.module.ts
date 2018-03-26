import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationSideNavComponent } from './organization-side-nav.component';
import { MaterialModule } from '../../../shared/material.module';
import { RouterModule } from '@angular/router';
import { TableMaterialButtonModule} from "../../../sections/table-material/table-material-button.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TableMaterialButtonModule
  ],
  declarations: [
    OrganizationSideNavComponent
  ],
  exports: [
    OrganizationSideNavComponent
  ]
})
export class OrganizationSideNavModule {
}
