import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizationService implements CanActivate {

  constructor(private router: Router) { }

  login(user: string, token: any) {
    localStorage.setItem('auth', JSON.stringify([user, token]));
  }

  logout() {
    localStorage.removeItem('auth');
  }

  isAuthenticated() {
    return !!localStorage.getItem('auth');
  }

  canActivate() {
    if (!this.isAuthenticated()) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
