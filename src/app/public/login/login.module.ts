import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {HttpGetUsersService} from './services/http-get-users.service';
import {HttpGetUserService} from './services/http-get-user.service';
import {HttpUserService} from './services/http-user.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    HttpUserService,
    HttpGetUsersService,
    HttpGetUserService,
  ]
})
export class LoginModule { }
