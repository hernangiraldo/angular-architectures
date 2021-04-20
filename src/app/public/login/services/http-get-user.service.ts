import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {HttpImplementationService} from '../../../core/singletons/http-implementation.service';

@Injectable()
export class HttpGetUserService {

  constructor(
    private readonly http: HttpImplementationService
  ) { }

  execute(): Observable<UserModel> {
    return of();
  }
}
