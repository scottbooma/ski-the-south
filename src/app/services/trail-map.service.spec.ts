import { TestBed } from '@angular/core/testing';

import { TrailMapService } from './trail-map.service';

describe('TrailMapService', () => {
  let service: TrailMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
