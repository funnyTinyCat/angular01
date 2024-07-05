/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LijekService } from './lijek.service';

describe('Service: Lijek', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LijekService]
    });
  });

  it('should ...', inject([LijekService], (service: LijekService) => {
    expect(service).toBeTruthy();
  }));
});
