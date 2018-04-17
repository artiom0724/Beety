import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, PageEvent } from '@angular/material';
import { EmployeesService } from './../employees.service';
import { Employee } from './../employee';

@Component({
  selector: 't-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})

export class EmployeeListComponent implements OnInit, AfterViewInit {

  header = 'Employee list';
  displayedColumns = ['name', 'phoneNumber', 'email', 'sex', 'comment'];
  dataSource = new MatTableDataSource<Employee>();
  pageNumber = 1;
  pageSize = 10;
  length: number;
  pageEvent: PageEvent;

  constructor(
    private employeeService: EmployeesService,
    private dialog: MatDialog) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.size();
    this.getEmployees();
  }

  getEmployees() {
    this.dataSource.data = this.employeeService.getEmployees(this.pageNumber, this.pageSize);
  }

  size() {
    this.length = this.employeeService.getEmployeeCount();
  }

  loadEmployees(event?: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.paginator.nextPage();
    this.pageSize = event.pageSize;
    this.getEmployees();
    this.size();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openClientDetail(id?: number, employee?: Employee) {
    // let isEditable = false;
    // employee == null ? employee = new Employee() : isEditable = true;

    // const dialogRef = this.dialog.open(EmployeeDetailComponent, {
    //   width: '600px',
    //   data: { employee: employee }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (dialogRef.componentInstance.deletedEmployeeId > 0) {
    //     this.log(`${result}`);
    //     this.getEmployees();
    //     return;
    //   }

    //   employee = <Employee> result.employee;
    //   if (isEditable) {
    //     this.log(`EDIT ${JSON.stringify(employee)}`);
    //     this.employeeService.updateEmployee(employee);
    //   } else {
    //     this.log(`ADD ${JSON.stringify(employee)}`);
    //     const addedEmployee = this.employeeService.addEmployee(employee);

    //     const employees = this.dataSource.data;
    //     this.log(`ADD ${JSON.stringify(employee)}`);
    //     employees.push(employee);
    //     this.dataSource.data = employees;
    //   }
    // });
  }

  private getEmployeeById(id: number): Employee {
      return null;
  }

  private log(message: string) {
    console.log('EmployeeListComponent: ' + message);
  }
}
