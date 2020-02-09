import {InjectionToken} from '@angular/core';

export const NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS =
  new InjectionToken<NgGooglePlacesAutocompleteSettings>('ng-google-places-autocomplete-settings');

export interface NgGooglePlacesAutocompleteSettings {
  googleMapsApiKey: string;
  locale?: string;
}
