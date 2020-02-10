# @ueler/ng-google-places-autocomplete
Angular component for Google Maps Places autocomplete.

## Introduction
This library offers a component 
to easily integrate a Google Maps Places autocomplete typeahead into your project.

### Features
- Uses Bootstrap styling classes
- Configurable request options (e.g. to limit the results to specific country)
- Returns places details (including long,lat,etc.) when user selects an option

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

## Configuration
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
