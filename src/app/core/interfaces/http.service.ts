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
