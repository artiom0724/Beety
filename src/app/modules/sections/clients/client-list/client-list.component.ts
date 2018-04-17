import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, PageEvent } from '@angular/material';
import { ClientService } from './../clients.service';
import { Client } from './../client';
import { ClientDetailComponent } from './../client-detail/client-detail.component';

@Component({
  selector: 't-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})

export class ClientListComponent implements OnInit, AfterViewInit {

  header = 'Client list';
  displayedColumns = ['name', 'phoneNumber', 'email', 'visits', 'sex', 'discount'];
  dataSource = new MatTableDataSource<Client>();
  pageNumber = 1;
  pageSize = 10;
  length: number;
  pageEvent: PageEvent;

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
      data: { client: client }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.deletedClientId > 0) {
        this.log(`${result}`);
        return;
      }

      const mockClient = new Client (11, 'xxx', '+375296949195', 'test@gmail.com', new Date(2018, 3, 28), 0, 'Мужской', '0%');
      if (isEditable) {
        this.log(`EDIT ${JSON.stringify(client)}`);
        this.clientService.updateClient(client);
      } else {
        this.log(`ADD ${JSON.stringify(client)}`);
        const clients = this.clientService.addClient(client);
        this.dataSource.data = clients;
      }
    });
  }

  private getClientById(id: number): Client {
      return null;
  }

  private log(message: string) {
    console.log('ClientListComponent: ' + message);
  }
}
