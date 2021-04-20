interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface GetListsDto<T> {
  info: Info;
  results: T[];
}
