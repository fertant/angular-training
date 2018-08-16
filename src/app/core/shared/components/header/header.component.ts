import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/authorization.service';
import { UsersService } from '../../../../pages/login/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userName: string;
  @Output() isLogged = new EventEmitter<boolean>();

  constructor(
    public authService: AuthorizationService,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.isLogged.emit(true);
      this.setUser();
    } else {
      this.isLogged.emit(false);
    }
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
    this.isLogged.emit(false);
    console.log('User logged out.');
    this.router.navigateByUrl('login');
  }
}
