import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() isLogged = new EventEmitter<boolean>();

  constructor(
    public authService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLogged.emit(this.authService.isAuthenticated());
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
