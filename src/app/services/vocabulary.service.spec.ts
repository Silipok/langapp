import { TestBed } from '@angular/core/testing';

import { VocabularyService } from './vocabulary.service';

describe('VocabularyService', () => {
  let service: VocabularyService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new VocabularyService();
  });
  it('init vocabular', () => {
    service.initVocab('en');
    expect(service.vocabular).toEqual([]);
  });
});

it('should be created', () => {
    const service: VocabularyService = TestBed.get(VocabularyService);
    expect(service).toBeTruthy();
  }
);
