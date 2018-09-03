import { TestBed, inject } from '@angular/core/testing';

import { Common2Service } from './common2.service';

describe('Common2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Common2Service]
    });
  });

  it('should be created', inject([Common2Service], (service: Common2Service) => {
    expect(service).toBeTruthy();
  }));
});
