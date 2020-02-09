import { TestBed } from '@angular/core/testing';

import { NgGooglePlacesAutocompleteService } from './ng-google-places-autocomplete.service';

describe('NgGooglePlacesAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGooglePlacesAutocompleteService = TestBed.get(NgGooglePlacesAutocompleteService);
    expect(service).toBeTruthy();
  });
});
