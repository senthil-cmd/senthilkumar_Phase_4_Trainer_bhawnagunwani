import { TestBed } from '@angular/core/testing';

import { ProductRestServiceService } from './product-rest-service.service';

describe('ProductRestServiceService', () => {
  let service: ProductRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
