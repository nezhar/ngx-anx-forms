import { TestBed } from '@angular/core/testing';

import { NgxAnxFormsService } from './ngx-anx-forms.service';

describe('NgxAnxFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAnxFormsService = TestBed.get(NgxAnxFormsService);
    expect(service).toBeTruthy();
  });
});
