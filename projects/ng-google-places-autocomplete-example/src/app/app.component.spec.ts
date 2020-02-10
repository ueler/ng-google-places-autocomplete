import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {
  NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
  NgGooglePlacesAutocompleteModule,
  NgGooglePlacesAutocompleteSettings
} from '../../../ng-google-places-autocomplete/src/public-api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        TypeaheadModule.forRoot(),
        NgGooglePlacesAutocompleteModule
      ],
      providers: [
        {
          provide: NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
          useValue: {
            googleMapsApiKey: 'GOOGLE_MAPS_API_KEY_HERE',
            locale: 'de'
          } as NgGooglePlacesAutocompleteSettings
        },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
