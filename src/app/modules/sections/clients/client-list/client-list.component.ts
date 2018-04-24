import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, PageEvent } from '@angular/material';
import { ClientService } from './../clients.service';
import { Client } from './../client';
import { ClientDetailComponent } from './../client-detail/client-detail.component';

@Component({
  selector: 't-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})

export class ClientListComponent implements OnInit, AfterViewInit {

  header = 'Client list';
  displayedColumns = ['name', 'phoneNumber', 'email', 'visits', 'sex', 'discount'];
  dataSource = new MatTableDataSource<Client>();
  pageNumber = 1;
  pageSize = 10;
  length: number;

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.size();
    this.getClients();
  }

  getClients() {
    this.dataSource.data = this.clientService.getClients(this.pageNumber, this.pageSize);
  }

  size() {
    this.length = this.clientService.getClientCount();
  }

  loadClients(event?: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.paginator.nextPage();
    this.pageSize = event.pageSize;
    this.getClients();
    this.size();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openClientDetail(id?: number, client?: Client) {
    let isEditable = false;
    if (client != null) {
      isEditable = true;
    }

    const dialogRef = this.dialog.open(ClientDetailComponent, {
      width: '600px',
      data: {client: client}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.deletedClientId > 0) {
        console.log(`ClientListComponent: ${result}`);
        return;
      }

      if (isEditable) {
        console.log(`ClientListComponent: EDIT ${JSON.stringify(client)}`);
        this.clientService.updateClient(client);
        return;
      }
      console.log(`ClientListComponent: ADD ${JSON.stringify(client)}`);
      this.dataSource.data = this.clientService.addClient(client);
    });
  }
}
