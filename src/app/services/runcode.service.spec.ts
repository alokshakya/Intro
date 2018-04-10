import { TestBed, inject } from '@angular/core/testing';

import { RuncodeService } from './runcode.service';

describe('RuncodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuncodeService]
    });
  });

  it('should be created', inject([RuncodeService], (service: RuncodeService) => {
    expect(service).toBeTruthy();
  }));
});
