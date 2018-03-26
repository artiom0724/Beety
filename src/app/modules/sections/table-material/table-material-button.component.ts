import {Component, Input, Output, Injectable, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class ConsumablesValidatorService implements ValidatorService {
  getRowValidator(): FormGroup {
    return new FormGroup({
      'name': new FormControl(null, Validators.required),
      'value': new FormControl(),
      'count': new FormControl(),
    });
  }
}


class Consumables {
  name: string;
  value: number;
  count: number;
}

@Component({
  selector: 't-table-material',
  styleUrls: ['table-material.component.scss'],
  templateUrl: 'table-material.component.html',
  providers: [
    {provide: ValidatorService, useClass: ConsumablesValidatorService }
  ],
})
export class TableMaterialComponent {

  constructor(private personValidator: ValidatorService) { }

  displayedColumns = ['name', 'value', 'count', 'actionsColumn'];

  @Input() personList = [
    { name: 'Mark', value: 15, count: 12 },
    { name: 'Brad', value: 15, count: 12 },
  ] ;
  @Output() personListChange = new EventEmitter<Consumables[]>();

  dataSource: TableDataSource<Consumables>;


  DownloadData(){
    /*Тут вызов сервиса, чтобы получить все материалы*/
  }

  UpoadData(){
    /*Тут вызов сервиса, чтобы поcлать все изменнёные или новые материалы*/
  }

  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Consumables, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
}


@Component({
  selector: 't-table-material-button',
  styleUrls: ['table-material-button.component.scss'],
  templateUrl: './table-material-button.component.html',
  entryComponents: [ TableMaterialComponent]
})

export class TableMaterialButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TableMaterialComponent, {
      data: {
        animal: 'panda'
      },
      width:'50%',
      height:'100%',
      position: {top: '0%', left: '0%'}
    });
  }
}
