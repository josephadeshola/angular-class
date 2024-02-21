import { TestBed } from '@angular/core/testing';

import { MybehaviourService } from './mybehaviour.service';

describe('MybehaviourService', () => {
  let service: MybehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
