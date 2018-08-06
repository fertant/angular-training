import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<UserModel>;

  constructor(private http: HttpClient) {
    this.users = [
      {
        id: 0,
        email: 'sample@example.com',
        password: 'admin',
        firstName: 'Andrii',
        lastName: 'Andrii'
      },
      {
        id: 1,
        email: 'sample1@example.com',
        password: 'admin',
        firstName: 'Andrii',
        lastName: 'Andrii'
      }
    ];
  }

  isExist(email: string, password: string) {
    const body = {
      login: email,
      password: password
    };
    this.http.post('http://localhost:3004/auth/login', body)
      .subscribe((res) => console.log(res.json()));
    //const existingUser = _.find(this.users, { 'email': email, 'password': password });
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }
}
