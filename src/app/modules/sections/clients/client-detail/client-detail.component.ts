import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Client } from './../client';
import { ClientService } from './../clients.service';

@Component({
  selector: 't-client-detail',
  templateUrl: 'client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})

export class ClientDetailComponent {

  client: Client;

  deletedClientId: number;

  readonly sexList = ['Мужской', 'Женский'];

  constructor(
    public dialogRef: MatDialogRef<ClientDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService) {
      this.client = data.client as Client;
    }

  cancelClientDetail(): void {
    this.dialogRef.close();
  }
}
