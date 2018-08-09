import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<UserModel>;

  constructor(private http: HttpClient) { }

  fetchUser(email: string, password: string): Observable<any> {
    const body = {
      login: email,
      password: password
    };
    return this.http.post('http://localhost:3004/auth/login', body);
  }
}
