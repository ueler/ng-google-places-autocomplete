import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgGooglePlacesAutocompleteComponent} from './ng-google-places-autocomplete.component';
import {TypeaheadModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {
  NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
  NgGooglePlacesAutocompleteSettings
} from './settings/ng-google-places-autocomplete-settings';

describe('NgGooglePlacesAutocompleteComponent', () => {
  let component: NgGooglePlacesAutocompleteComponent;
  let fixture: ComponentFixture<NgGooglePlacesAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgGooglePlacesAutocompleteComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        TypeaheadModule.forRoot()
      ],
      providers: [
        {
          provide: NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
          useValue: {
            googleMapsApiKey: 'GOOGLE_MAPS_API_KEY_HERE',
            locale: 'de'
          } as NgGooglePlacesAutocompleteSettings
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGooglePlacesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
