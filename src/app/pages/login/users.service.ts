import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from './model/user';

@Injectable()
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

  fetchUserInfo(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.post('http://localhost:3004/auth/userInfo', null, {});
  }
}
