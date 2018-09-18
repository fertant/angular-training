import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AuthorizationService } from '../../services/authorization.service';
import { UsersService } from '../../../../pages/login/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  auth: boolean;
  userName: string;

  constructor(
    public authService: AuthorizationService,
    private userService: UsersService,
    private router: Router,
    private store: Store<any>
  ) {
    store.pipe(select('auth')).subscribe((state) => {
      this.auth = state;
      if (this.auth) {
        this.setUser();
      }
    });
  }

  setUser() {
    this.userService.fetchUserInfo(this.authService.getUserToken())
      .subscribe((res) => {
         this.userName = `${res.name.first} ${res.name.last}`;
      });
  }

  onLogin() {
    this.router.navigateByUrl('login');
  }

  onLogout() {
    this.authService.logout();
    console.log('User logged out.');
    this.router.navigateByUrl('login');
  }
}
