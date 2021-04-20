import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export interface UserService {
  getAll(): Observable<UserModel[]>;
  getUser(): Observable<UserModel>;
}
