import { BehaviorSubject, Observable } from 'rxjs';

export type HttpStatusType = 'loading' | 'success' | 'empty' | 'error';

export interface IHttpStatus {
  loading: boolean;
  success: boolean;
  empty: boolean;
  error: boolean;
}

export interface HttpStatusService {
  readonly requestStatus: BehaviorSubject<Map<string, IHttpStatus>>;
  change(key: string, type: HttpStatusType): void;
  subscribe(key: string): Observable<IHttpStatus>;
  unsubscribe(key: string | string[]): void;
}
