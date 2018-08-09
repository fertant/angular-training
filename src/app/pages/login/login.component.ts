import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { AuthorizationService } from '../../core/shared/services/authorization.service';
import { UserModel } from './model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  userValid = true;

  constructor(
    private userService: UsersService,
    private loginService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.userService.fetchUser(this.user.email, this.user.password)
      .subscribe((res) => {
        this.loginService.login(this.user.email, res.token);
        this.router.navigateByUrl('courses');
      }, (err) => {
        this.userValid = false;
      });
  }

  onCancel() {
    this.router.navigateByUrl('courses');
  }
}
