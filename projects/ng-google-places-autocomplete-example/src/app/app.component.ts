import {Component} from '@angular/core';
import {AutocompletionRequestOptions, PlacesDetailsRequestOptions} from '../../../ng-google-places-autocomplete/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  autocompletionOptions: AutocompletionRequestOptions = {
    componentRestrictions: {country: 'CH'},
    types: ['geocode']
  };

  placesDetailsOptions: PlacesDetailsRequestOptions = {
    fields: ['geometry']
  };

  addressChanged($event: google.maps.places.PlaceResult) {
    console.log($event);
  }
}
