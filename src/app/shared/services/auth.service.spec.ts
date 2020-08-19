import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }} ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
