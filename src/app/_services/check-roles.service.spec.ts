import { TestBed } from '@angular/core/testing';

import { CheckRolesService } from './check-roles.service';

describe('CheckRolesService', () => {
  let service: CheckRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
