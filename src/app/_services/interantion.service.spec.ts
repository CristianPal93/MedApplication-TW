import { TestBed } from '@angular/core/testing';

import { InterantionService } from './interantion.service';

describe('InterantionService', () => {
  let service: InterantionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterantionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
