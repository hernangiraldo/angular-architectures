import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { GetParams } from '../../../core/interfaces/http.service';
import { API_SIGNATURE, API_URLS } from '../../../core/const';
import { map } from 'rxjs/operators';
import { GetListsDto } from '../../../core/dtos/get-lists.dto';
import { GetCharacterDto } from '../dtos/get-character.dto';
import {HttpImplementationService} from '../../../core/singletons/http-implementation.service';

@Injectable()
export class HttpGetUsersService {
  constructor(
    private readonly http: HttpImplementationService
  ) { }

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
