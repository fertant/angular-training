import { Component } from '@angular/core';
import { AuthorizationService } from './core/shared/services/authorization.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.isLogged = this.loginService.isAuthenticated();
  }
}
