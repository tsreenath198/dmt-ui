import { TestBed } from '@angular/core/testing';

import { EmployeepaymentService } from './employeepayment.service';

describe('EmployeepaymentService', () => {
  let service: EmployeepaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeepaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
