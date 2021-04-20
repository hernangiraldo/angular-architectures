import { Observable } from 'rxjs';
import { UserModel } from './user.model';
import {IUseCase} from '../../../core/entities/interfaces/use-case';

export abstract class GetUserService implements IUseCase<void, UserModel>{
  abstract execute(): Observable<UserModel>;
}
