import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AUTH, ANONYMOUS } from '../reducers/auth.reducer';

@Injectable()
export class AuthorizationService implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<any>
  ) {
    if (this.isAuthenticated()) {
      this.store.dispatch({type: AUTH});
    } else {
      this.store.dispatch({type: ANONYMOUS});
    }
  }

  login(mail: string, user: any) {
    localStorage.setItem('auth', JSON.stringify([mail, user]));
    this.store.dispatch({type: AUTH});
  }

  logout() {
    localStorage.removeItem('auth');
    this.store.dispatch({type: ANONYMOUS});
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
