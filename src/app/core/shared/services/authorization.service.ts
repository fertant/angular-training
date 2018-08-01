import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthorizationService implements CanActivate {

  constructor() { }

  login(user: string, token: any) {
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

  canActivate() {
    return this.isAuthenticated();
  }
}
