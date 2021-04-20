import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserModel} from '../entities/models/user.model';
import {GetUsersService} from '../entities/models/get-users.service';
import {GetUserService} from '../entities/models/get-user.service';
import {UserService} from '../entities/interfaces/user.service';

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
