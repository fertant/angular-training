import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { UserModel } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<UserModel>;

  constructor() {
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
    const existingUser = _.find(this.users, { 'email': email, 'password': password });
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }
}
