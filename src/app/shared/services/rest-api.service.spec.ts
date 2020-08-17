import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    expect(service).toBeTruthy();
  });
});
