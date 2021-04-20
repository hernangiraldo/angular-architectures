import { TestBed } from '@angular/core/testing';

import { HttpStatusImplementationService } from './http-status-implementation.service';

describe('HttpStatusImplementationService', () => {
  let service: HttpStatusImplementationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStatusImplementationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
