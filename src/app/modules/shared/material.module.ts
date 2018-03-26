import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatStepperModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ]
})

export class MaterialModule {
}
