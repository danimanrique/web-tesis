import { TestBed } from '@angular/core/testing';

import { TestimoniosService } from './testimonios.service';

describe('TestimoniosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestimoniosService = TestBed.get(TestimoniosService);
    expect(service).toBeTruthy();
  });
});
