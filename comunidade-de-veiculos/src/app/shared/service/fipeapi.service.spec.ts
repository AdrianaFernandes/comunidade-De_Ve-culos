import { TestBed } from '@angular/core/testing';

import { FipeapiService } from './fipeapi.service';

describe('FipeapiService', () => {
  let service: FipeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
