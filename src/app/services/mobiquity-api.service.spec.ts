import { TestBed } from '@angular/core/testing';

import { MobiquityApiService } from './mobiquity-api.service';

describe('MobiquityApiService', () => {
  let service: MobiquityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobiquityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
