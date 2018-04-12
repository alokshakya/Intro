import { TestBed, inject } from '@angular/core/testing';

import { GlotauthService } from './glotauth.service';

describe('GlotauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlotauthService]
    });
  });

  it('should be created', inject([GlotauthService], (service: GlotauthService) => {
    expect(service).toBeTruthy();
  }));
});
