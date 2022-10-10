import { TestBed } from '@angular/core/testing';

import { RefundrequestService } from './refundrequest.service';

describe('RefundrequestService', () => {
  let service: RefundrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
