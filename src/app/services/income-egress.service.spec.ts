import { TestBed } from '@angular/core/testing';

import { IncomeEgressService } from './income-egress.service';

describe('IncomeEgressService', () => {
  let service: IncomeEgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeEgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
