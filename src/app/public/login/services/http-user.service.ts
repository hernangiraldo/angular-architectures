import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserModel} from '../models/user.model';
import {HttpImplementationService} from '../../../core/singletons/http-implementation.service';

@Injectable()
export class HttpUserService  {

  constructor(
    private readonly http: HttpImplementationService
  ) { }

  getAll(): Observable<UserModel[]> {
    return of();
  }

  getUser(): Observable<UserModel> {
    return of();
  }

}
