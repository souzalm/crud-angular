import { TestBed } from '@angular/core/testing';

import { LotacoesService } from './lotacoes.service';

describe('LotacoesService', () => {
  let service: LotacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
