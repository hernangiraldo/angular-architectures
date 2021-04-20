import { Component, OnDestroy, OnInit } from '@angular/core';
import { API_SIGNATURE } from '../../core/const';
import { Observable } from 'rxjs';
import { UserModel } from './models/user.model';
import { IHttpStatus } from '../../core/interfaces/http-status.service';
import {HttpStatusImplementationService} from '../../core/singletons/http-status-implementation.service';
import {HttpGetUsersService} from './services/http-get-users.service';
import {HttpGetUserService} from './services/http-get-user.service';
import {HttpUserService} from './services/http-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public users$!: Observable<UserModel[]>;
  public user$!: Observable<UserModel>;
  public usersStatus$: Observable<IHttpStatus>;
  public userStatus$: Observable<IHttpStatus>;

  constructor(
    private readonly httpStatusSvc: HttpStatusImplementationService,
    private readonly getUsersSvc: HttpGetUsersService,
    private readonly getUserSvc: HttpGetUserService,
    private readonly usersSvc: HttpUserService
  ) {
    this.usersStatus$ = httpStatusSvc.subscribe(API_SIGNATURE.GET_CHARACTERS);
    this.userStatus$ = httpStatusSvc.subscribe(API_SIGNATURE.GET_CHARACTER);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnDestroy(): void {
    this.httpStatusSvc.unsubscribe([
      API_SIGNATURE.GET_CHARACTERS,
      API_SIGNATURE.GET_CHARACTER
    ]);
  }

  public getCharacters(): void {
    this.users$ = this.getUsersSvc.execute();
    // this.users$ = this.usersSvc.getAll();
  }

  public getUser(): void {
    this.user$ = this.getUserSvc.execute();
    // this.user$ = this.usersSvc.getUser();
  }

}
