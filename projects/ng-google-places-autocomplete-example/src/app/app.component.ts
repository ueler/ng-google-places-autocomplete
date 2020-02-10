import {Component} from '@angular/core';
import {AutocompletionRequestOptions} from '../../../ng-google-places-autocomplete/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  requestOptions: AutocompletionRequestOptions = {
    componentRestrictions: {country: 'CH'},
    types: ['geocode']
  };

  addressChanged($event: google.maps.places.PlaceResult) {
    console.log($event);
  }
}
