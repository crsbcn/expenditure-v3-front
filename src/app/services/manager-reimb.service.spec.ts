import { TestBed, inject } from '@angular/core/testing';

import { ManagerReimbService } from './manager-reimb.service';

describe('ManagerReimbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerReimbService]
    });
  });

  it('should be created', inject([ManagerReimbService], (service: ManagerReimbService) => {
    expect(service).toBeTruthy();
  }));
});