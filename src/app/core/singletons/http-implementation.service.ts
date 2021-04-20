import {Inject, Injectable} from '@angular/core';
import {DeleteParams, GetParams, PostParams, PutParams} from '../interfaces/http.service';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpStatusImplementationService} from './http-status-implementation.service';

@Injectable({
  providedIn: 'root'
})
export class HttpImplementationService {

  readonly #backUrl: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly httpStatusSvc: HttpStatusImplementationService
  ) {
    this.#backUrl = environment.backUrl;
  }

  private dispatcher<T>(obs: Observable<any>, signature: string): Observable<T>{
    this.httpStatusSvc.change(signature, 'loading');
    return obs
      .pipe(
        delay(3000),
        map(response => {
          this.httpStatusSvc.change(signature, 'success');
          return response;
        }),
        catchError(err => {
          this.httpStatusSvc.change(signature, 'error');
          return throwError(err);
        })
      );
  }

  public delete<T>(params: DeleteParams): Observable<T> {
    return this.dispatcher<T>(
      this.httpClient.delete(`${this.#backUrl}${params.path}`), params.signature
    );
  }

  public get<T>(params: GetParams): Observable<T> {
    return this.dispatcher<T>(
      this.httpClient.get(`${this.#backUrl}${params.path}`), params.signature
    );
  }

  public post<T>(params: PostParams): Observable<T> {
    return this.dispatcher<T>(
      this.httpClient.post(`${this.#backUrl}${params.path}`, params.body), params.signature
    );
  }

  public put<T>(params: PutParams): Observable<T> {
    return this.dispatcher<T>(
      this.httpClient.put(`${this.#backUrl}${params.path}`, params.body), params.signature
    );
  }

}
