import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {
  NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
  NgGooglePlacesAutocompleteModule,
  NgGooglePlacesAutocompleteSettings
} from '../../../ng-google-places-autocomplete/src/public-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
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
        googleMapsApiKey: 'GOOGLE_MAPS_API_KEY_HERE'
      } as NgGooglePlacesAutocompleteSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
