import {Inject, Injectable} from '@angular/core';
import {GetUserService} from '../models/get-user.service';
import {UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {PROVIDERS} from '../../../core/const';
import {HttpService} from '../../../core/entities/interfaces/http.service';

@Injectable()
export class HttpGetUserService extends GetUserService {

  constructor(
    @Inject(PROVIDERS.HTTP_SERVICE) private http: HttpService
  ) {
    super();
  }

  execute(): Observable<UserModel> {
    return of();
  }
}
