import { TestBed } from '@angular/core/testing';

import { CumpasService } from './cumpas.service';

describe('CumpasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CumpasService = TestBed.get(CumpasService);
    expect(service).toBeTruthy();
  });
});
