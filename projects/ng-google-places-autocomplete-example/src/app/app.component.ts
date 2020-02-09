import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-google-places-autocomplete-example';

  addressChanged($event: google.maps.places.PlaceResult) {
    console.log($event);
  }
}
