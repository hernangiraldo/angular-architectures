import { Inject, Injectable } from '@angular/core';
import { UserModel } from '../entities/models/user.model';
import { Observable, of } from 'rxjs';
import { GetParams, HttpService } from '../../core/entities/interfaces/http.service';
import { API_SIGNATURE, API_URLS, PROVIDERS } from '../../core/const';
import { map } from 'rxjs/operators';
import { GetListsDto } from '../../core/entities/dtos/get-lists.dto';
import { GetCharacterDto } from '../entities/dtos/get-character.dto';
import {GetUsersService} from '../entities/models/get-users.service';

@Injectable()
export class HttpGetUsersService extends GetUsersService {
  constructor(
    @Inject(PROVIDERS.HTTP_SERVICE) private http: HttpService
  ) {
    super();
  }

  execute(): Observable<UserModel[]> {
    const params: GetParams = {
      path: API_URLS.characters,
      signature: API_SIGNATURE.GET_CHARACTERS,
    };

    return this.http.get<GetListsDto<GetCharacterDto>>(params)
      .pipe(
        map(response => response.results.map(c => new UserModel(c.id, `${c.name}`)))
      );
  }
}
