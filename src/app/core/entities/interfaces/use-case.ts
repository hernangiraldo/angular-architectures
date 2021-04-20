import {Observable} from 'rxjs';

export interface IUseCase<TRequest, TPresenter> {
  execute(request: TRequest): Observable<TPresenter>;
}
