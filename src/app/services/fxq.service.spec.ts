import { TestBed } from '@angular/core/testing';

import { FxqService } from './fxq.service';

describe('FxqService', () => {
  let service: FxqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FxqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
