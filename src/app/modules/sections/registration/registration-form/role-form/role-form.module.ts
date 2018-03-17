import { NgModule } from '@angular/core';
import { RoleFormComponent } from './role-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { AppSelectModule } from '../../../../components/app-controls/app-select/app-select.module';
import { AppInputModule } from '../../../../components/app-controls/app-input/app-input.module';

@NgModule({
  imports: [
    SharedModule,
    AppInputModule,
    AppSelectModule,
  ],
  declarations: [
    RoleFormComponent
  ],
  exports: [
    RoleFormComponent
  ]
})
export class RoleFormModule {
}
