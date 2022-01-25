import { TestBed } from '@angular/core/testing';

import { SupportinteractionService } from './supportinteraction.service';

describe('SupportinteractionService', () => {
  let service: SupportinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportinteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
