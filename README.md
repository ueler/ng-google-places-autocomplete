# @ueler/ng-google-places-autocomplete
Angular component for Google Maps Places autocomplete.

[![npm version](https://badge.fury.io/js/%40ueler%2Fng-google-places-autocomplete.svg)](https://badge.fury.io/js/%40ueler%2Fng-google-places-autocomplete)

## Introduction
This library offers a component 
to easily integrate a Google Maps Places autocomplete typeahead into your project.

### Features
- Uses Bootstrap styling classes
- Configurable request options (e.g. to limit the results to specific country)
- Returns places details (including long,lat,etc.) when user selects an option

## Stackblitz Example App
See the component in action in this example app:
https://stackblitz.com/edit/angular-bzuvbk

## Installation
The library relies on the [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap) typeahead component. 
Therefore the first step is to install that peer dependency.  
(Note: The library is tree-shakeable, therefore only using the typeahead module doesn't add much to your application size.)


1\. Install ``ngx-bootstrap``:
```
npm install ngx-bootstrap --save
```

2\. Add typeahead package to NgModule imports:
```
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';

@NgModule({
  ...
  imports: [TypeaheadModule.forRoot(),...]
  ...
})
```

3\. Install ``@ueler/ng-google-places-autocomplete``
```
npm install @ueler/ng-google-places-autocomplete --save
```

4\. Import module and configure API Key:  

You need a Google Maps API Key in order to run places search queries.  
Please follow this guide on how to get one: [Get API Key](https://developers.google.com/places/web-service/get-api-key)
(you need to select the APIs _Places API_ and _Maps JavaScript API_ for the key).
Provide the API key as config to your module:
```
import {
  NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
  NgGooglePlacesAutocompleteSettings
} from '@ueler/ng-google-places-autocomplete';

@NgModule({
  providers: [
    {
      provide: NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
      useValue: {
        googleMapsApiKey: 'GOOGLE_MAPS_API_KEY_HERE'
      } as NgGooglePlacesAutocompleteSettings,
    },
  ]
})
export class MyModule {
}
```

## Usage
Basic usage:
```
<lib-ng-google-places-autocomplete></lib-ng-google-places-autocomplete>
```

Perform an action when user selects an option:
```
<lib-ng-google-places-autocomplete (addressChanged)="addressChanged($event)">
</lib-ng-google-places-autocomplete>
```
The ``$event`` contains the selected option of the type ``PlaceResult`` (https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult).

## Configuration Options
An optional configuration can be passed to the component to configure the typeahead results
```
<lib-ng-google-places-autocomplete [requestOptions]="requestOptions">
</lib-ng-google-places-autocomplete>
```
See [google.maps.places.AutocompleteRequest object specification](https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest) for valid options.

For example, to limit the results to Switzerland, you can specify the following configuration and pass it to the component:
```
requestOptions: AutocompletionRequestOptions = {
    componentRestrictions: {country: 'CH'}
};
```

## Compatibility
The library is compatible with Angular versions ``>=8.2.14`` and ngx-bootstrap ``>=5.3.2``.
