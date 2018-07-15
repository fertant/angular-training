import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  onLogin(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
