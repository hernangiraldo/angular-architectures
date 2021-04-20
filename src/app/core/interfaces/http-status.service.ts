export type HttpStatusType = 'loading' | 'success' | 'empty' | 'error';

export interface IHttpStatus {
  loading: boolean;
  success: boolean;
  empty: boolean;
  error: boolean;
}
