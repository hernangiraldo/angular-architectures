import { TestBed } from '@angular/core/testing';

import { HttpImplementationService } from './http-implementation.service';

describe('HttpImplementationService', () => {
  let service: HttpImplementationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpImplementationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
