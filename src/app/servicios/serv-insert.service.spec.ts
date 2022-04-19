import { TestBed } from '@angular/core/testing';

import { ServInsertService } from './serv-insert.service';

describe('ServInsertService', () => {
  let service: ServInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
