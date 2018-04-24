import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, PageEvent } from '@angular/material';
import { EmployeesService } from './../employees.service';
import { Employee } from './../employee';

@Component({
  selector: 't-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit, AfterViewInit {

  header = 'Employee list';
  displayedColumns = ['name', 'phoneNumber', 'email', 'sex', 'comment'];
  dataSource = new MatTableDataSource<Employee>();
  length: number;

  constructor(private employeeService: EmployeesService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.length = this.employeeService.getEmployeeCount();
    this.dataSource.data = this.employeeService.getEmployees();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
