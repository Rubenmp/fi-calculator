import { TestBed } from '@angular/core/testing';

import { FiService } from './fi.service';

describe('FiService', () => {
  let service: FiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
