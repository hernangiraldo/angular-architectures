import { Injectable } from '@angular/core';
import {HttpStatusType, IHttpStatus} from '../interfaces/http-status.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusImplementationService {

  requestStatus = new BehaviorSubject<Map<string, IHttpStatus>>(new Map());
  #baseValue = {
    loading: false,
    success: false,
    empty: false,
    error: false,
  };

  public change(key: string, type: HttpStatusType): void {
    const newStatus = {
      ...this.#baseValue,
      ...{ [type]: true },
    };

    const newStatusValues = this.requestStatus.getValue().set(key, newStatus);
    this.requestStatus.next(newStatusValues);
  }

  public subscribe(key: string): Observable<IHttpStatus> {
    return this.requestStatus.pipe(
      map(e => e.get(key))
    ) as Observable<IHttpStatus>;
  }

  public unsubscribe(key: string | string[]): void {
    Array.isArray(key)
      ? key.forEach(k => this.remove(k))
      : this.remove(key);
  }

  private remove(key: string): void {
    this.requestStatus.pipe(
      map(e => e.delete(key))
    );
  }
}
