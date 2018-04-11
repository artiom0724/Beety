import { NgModule} from '@angular/core';
import { TableMaterialButtonRoutingModule } from './table-material-button-routing.module';
import {TableMaterialButtonComponent, TableMaterialComponent} from './table-material-button.component';
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatIconModule, MatInputModule, MatTableModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    TableMaterialButtonRoutingModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],

  declarations: [
    TableMaterialButtonComponent,
    TableMaterialComponent,
  ],
  exports: [
    TableMaterialButtonComponent,
  ],
  entryComponents: [TableMaterialButtonComponent, TableMaterialComponent],
  bootstrap: [TableMaterialButtonComponent],
})

export class TableMaterialButtonModule {
}

