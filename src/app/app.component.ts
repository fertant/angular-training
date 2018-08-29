import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLogged: Observable<boolean>;

  constructor(
    private store: Store<any>
  ) {
    this.isLogged = store.pipe(select('auth'));
  }
}
