import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizationService } from './authorization.service';

import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        InterceptorService,
        AuthorizationService
      ]
    });
  });

  it('should be created', inject([InterceptorService], (service: InterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
