import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {HttpGetUsersService} from './services/http-get-users.service';
import { PROVIDERS } from '../../core/const';
import {HttpGetUserService} from './services/http-get-user.service';
import {HttpUserService} from './services/http-user.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    {
      provide: PROVIDERS.USER_SERVICE,
      useClass: HttpUserService,
    },
    {
      provide: PROVIDERS.GET_USERS_SERVICES,
      useClass: HttpGetUsersService,
    },
    {
      provide: PROVIDERS.GET_USER_SERVICES,
      useClass: HttpGetUserService,
    }
  ]
})
export class LoginModule { }
