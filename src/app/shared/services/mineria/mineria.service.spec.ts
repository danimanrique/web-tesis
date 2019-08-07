import { TestBed } from '@angular/core/testing';

import { MineriaService } from './mineria.service';

describe('MineriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MineriaService = TestBed.get(MineriaService);
    expect(service).toBeTruthy();
  });
});
