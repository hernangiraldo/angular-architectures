import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserModel} from '../models/user.model';
import {GetUsersService} from '../models/get-users.service';
import {GetUserService} from '../models/get-user.service';
import {UserService} from '../interfaces/user.service';

@Injectable()
export class HttpUserService implements UserService {

  constructor() { }

  getAll(): Observable<UserModel[]> {
    return of();
  }

  getUser(): Observable<UserModel> {
    return of();
  }

}
