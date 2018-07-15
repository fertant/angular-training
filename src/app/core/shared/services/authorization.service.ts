import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  login(user: string, token: string) {
    localStorage.setItem('auth', JSON.stringify([user, token]));
  }

  logout() {
    localStorage.removeItem('auth');
  }

  isAuthenticated() {
    return null !== localStorage.getItem('auth');
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('auth'));
  }
}
