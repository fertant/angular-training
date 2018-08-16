import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthorizationService implements CanActivate {

  constructor(private router: Router) { }

  login(mail: string, user: any) {
    localStorage.setItem('auth', JSON.stringify([mail, user]));
  }

  logout() {
    localStorage.removeItem('auth');
  }

  isAuthenticated(): boolean {
    return null !== localStorage.getItem('auth');
  }

  getUserToken() {
    const currentUser = JSON.parse(localStorage.getItem('auth'));
    return currentUser[1].token;
  }

  canActivate(): Observable<boolean> {
    return of(this.isAuthenticated());
  }
}
