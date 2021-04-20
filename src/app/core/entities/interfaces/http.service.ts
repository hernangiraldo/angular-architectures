import { Observable } from 'rxjs';

export interface GetParams {
  path: string;
  signature: string;
}

export interface PostParams {
  path: string;
  body: any;
  signature: string;
}

export interface PutParams {
  path: string;
  body: any;
  signature: string;
}

export interface DeleteParams {
  path: string;
  signature: string;
}

export interface HttpService {
  get<T>(params: GetParams): Observable<T>;
  post<T>(params: PostParams): Observable<T>;
  put<T>(params: PutParams): Observable<T>;
  delete<T>(params: DeleteParams): Observable<T>;
}
