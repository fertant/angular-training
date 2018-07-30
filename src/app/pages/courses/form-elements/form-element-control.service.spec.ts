import { TestBed, inject } from '@angular/core/testing';

import { FormElementControlService } from './form-element-control.service';

describe('FormElementControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormElementControlService]
    });
  });

  it('should be created', inject([FormElementControlService], (service: FormElementControlService) => {
    expect(service).toBeTruthy();
  }));
});
