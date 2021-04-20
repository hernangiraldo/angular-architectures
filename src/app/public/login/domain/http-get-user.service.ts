import {Inject, Injectable} from '@angular/core';
import {GetUserService} from '../entities/models/get-user.service';
import {UserModel} from '../entities/models/user.model';
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
