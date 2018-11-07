import { TestBed } from '@angular/core/testing';

import { ExampleLibService } from './example-lib.service';

describe('ExampleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleLibService = TestBed.get(ExampleLibService);
    expect(service).toBeTruthy();
  });
});
