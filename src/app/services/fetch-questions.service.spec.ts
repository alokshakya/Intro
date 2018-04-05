import { TestBed, inject } from '@angular/core/testing';

import { FetchQuestionsService } from './fetch-questions.service';

describe('FetchQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchQuestionsService]
    });
  });

  it('should be created', inject([FetchQuestionsService], (service: FetchQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
