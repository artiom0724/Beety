import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Client } from './client';

@Injectable()
export class ClientService {

  clients: Client[] = [
       {id: 1, name: 'Федоров Алексей Дмитриевич', phoneNumber: '+375296949191', email: 'test1@gmail.com',
       birthdayDate: new Date(1996, 0, 1), visits: 5, sex: 'Мужской', discount: '0%'},
       {id: 2, name: 'Пастушенко Сергей Александрович', phoneNumber: '+375296949192', email: 'test2@gmail.com',
       birthdayDate: new Date(1992, 2, 6), visits: 2, sex: 'Мужской', discount: '5%'},
       {id: 3, name: 'Лешевич Владислав Викторович', phoneNumber: '+375296949193', email: 'test3@gmail.com',
       birthdayDate: new Date(1998, 3, 5), visits: 5, sex: 'Мужской', discount: '0%'},
       {id: 4, name: 'Иванова Ника Петровна', phoneNumber: '+375296949194', email: 'test4@gmail.com',
       birthdayDate: new Date(1995, 6, 27), visits: 3, sex: 'Женский', discount: '10%'},
       {id: 5, name: 'Зубель Маргарита Михайловна', phoneNumber: '+375296949195', email: 'test5@gmail.com',
       birthdayDate: new Date(1993, 4, 17), visits: 10, sex: 'Женский', discount: '10%'},
       {id: 6, name: 'Карачун Антон Петрович', phoneNumber: '+375296949196', email: 'test6@gmail.com',
       birthdayDate: new Date(2000, 9, 23), visits: 3, sex: 'Мужской', discount: '4%'},
       {id: 7, name: 'Василевский Иван Иванович', phoneNumber: '+375296949197', email: 'test7@gmail.com',
       birthdayDate: new Date(1991, 10, 14), visits: 5, sex: 'Мужской', discount: '0%'},
       {id: 8, name: 'Василевская Василиса Петровна', phoneNumber: '+375296949198', email: 'test8@gmail.com',
       birthdayDate: new Date(1991, 10, 14), visits: 5, sex: 'Женский', discount: '0%'},
       {id: 9, name: 'Василь Иван Иванович', phoneNumber: '+375296949199', email: 'test9@gmail.com',
       birthdayDate: new Date(1991, 10, 14), visits: 5, sex: 'Мужской', discount: '0%'},
       {id: 10, name: 'Василек Иван Иванович', phoneNumber: '+375296949110', email: 'test10@gmail.com',
       birthdayDate: new Date(1991, 10, 14), visits: 5, sex: 'Мужской', discount: '0%'},
  ];

  constructor (private http: HttpClient) {
  }

  getClients(page: number, pageSize: number): Client[] {
    return this.clients;
  }

  getClientCount(): number {
    return this.clients.length;
  }

  addClient(client: Client): Client[] {
    this.clients.push(client);
    return this.clients;
  }

  updateClient(client: Client): Client {
    return client;
  }

  deleteClient(client: Client): void {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ClientService: ' + message);
  }
}
