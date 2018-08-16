import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthorizationService } from '../../core/shared/services/authorization.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers:  [
    UsersService,
    AuthorizationService
  ]
})
export class LoginModule { }
