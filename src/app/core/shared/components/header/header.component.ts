import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() isLogged = new EventEmitter<boolean>();

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.isLogged.emit(this.authorizationService.isAuthenticated());
  }

  onLogin() {
    this.authorizationService.login('admin', 'access_token_123');
    this.isLogged.emit(true);
    console.log('User logged in.');
  }

  onLogout() {
    this.authorizationService.logout();
    this.isLogged.emit(false);
    console.log('User logged out.');
  }
}
