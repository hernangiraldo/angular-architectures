import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../entities/interfaces/user.service';
import { API_SIGNATURE, PROVIDERS } from '../../../core/const';
import { Observable } from 'rxjs';
import { UserModel } from '../entities/models/user.model';
import { HttpStatusService, IHttpStatus } from '../../../core/entities/interfaces/http-status.service';
import {GetUsersService} from '../entities/models/get-users.service';
import {GetUserService} from '../entities/models/get-user.service';

@Component({
  selector: 'app-login',
  templateUrl: '../presentation/login.component.html',
  styleUrls: ['../presentation/login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public users$!: Observable<UserModel[]>;
  public user$!: Observable<UserModel>;
  public usersStatus$: Observable<IHttpStatus>;
  public userStatus$: Observable<IHttpStatus>;

  constructor(
    @Inject(PROVIDERS.HTTP_STATUS_SERVICE) private httpStatusSvc: HttpStatusService,
    @Inject(PROVIDERS.GET_USERS_SERVICES) private getUsersSvc: GetUsersService,
    @Inject(PROVIDERS.GET_USER_SERVICES) private getUserSvc: GetUserService,
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
  }

  public getUser(): void {
    this.user$ = this.getUserSvc.execute();
  }

}
