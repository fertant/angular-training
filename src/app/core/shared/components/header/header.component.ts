import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() isLogged = new EventEmitter<boolean>();
  authService: AuthorizationService;

  constructor(private authorizationService: AuthorizationService) {
    this.authService = authorizationService;
  }

  ngOnInit() {
    this.isLogged.emit(this.authService.isAuthenticated());
  }

  onLogin() {
    this.authService.login('admin', 'access_token_123');
    this.isLogged.emit(true);
    console.log('User logged in.');
  }

  onLogout() {
    this.authService.logout();
    this.isLogged.emit(false);
    console.log('User logged out.');
  }
}
