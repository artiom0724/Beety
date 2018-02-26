import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule, MatStepperModule, MatSelectModule,
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
  ]
})
export class MaterialModule {
}
