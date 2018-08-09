import { Component } from '@angular/core';
import { AuthorizationService } from './core/shared/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLogged: boolean;

  constructor(
    private loginService: AuthorizationService,
  ) {
    this.isLogged = this.loginService.isAuthenticated();
  }

  onLogin(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
