import {ApplicationRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {bindCallback, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';
import {NgLazyloadScriptService} from '@ueler/ng-lazyload-script';
import {
  NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS,
  NgGooglePlacesAutocompleteSettings
} from './settings/ng-google-places-autocomplete-settings';
import {AutocompletionRequestOptions} from './settings/autocompletion-request-options';
import {PlacesDetailsRequestOptions} from './settings/places-details-request-options';
import PlaceResult = google.maps.places.PlaceResult;
import AutocompletionRequest = google.maps.places.AutocompletionRequest;
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import PlaceDetailsRequest = google.maps.places.PlaceDetailsRequest;
import PlacesServiceStatus = google.maps.places.PlacesServiceStatus;

@Component({
  selector: 'lib-ng-google-places-autocomplete',
  templateUrl: './ng-google-places-autocomplete.component.html',
  styleUrls: ['./ng-google-places-autocomplete.component.scss']
})
export class NgGooglePlacesAutocompleteComponent implements OnInit {

  dataSource: Observable<AutocompletePrediction[]>;

  private autoCompleteService: google.maps.places.AutocompleteService;
  private placesService: google.maps.places.PlacesService;

  @Input()
  inputPlaceholder = '';

  @Input()
  inputText = '';

  @Output()
  addressChanged: EventEmitter<PlaceResult> = new EventEmitter();

  @Input()
  autocompletionOptions?: AutocompletionRequestOptions;

  @Input()
  placesDetailsOptions?: PlacesDetailsRequestOptions;

  @ViewChild('addressInput', {static: false}) addressInput: ElementRef;

  @ViewChild('attributions', {static: true}) attributions: ElementRef;


  constructor(private lazyLoadingScriptService: NgLazyloadScriptService,
              private ngZone: NgZone,
              private ref: ApplicationRef,
              @Inject(NG_GOOGLE_PLACES_AUTOCOMPLETE_SETTINGS) private settings: NgGooglePlacesAutocompleteSettings) {
  }

  ngOnInit() {
    let params = new HttpParams();
    params = params.set('libraries', 'places');
    params = params.set('language', this.settings.locale ? this.settings.locale : 'en');
    params = params.set('key', this.settings.googleMapsApiKey);
    const googlePlacesScriptUrl = 'https://maps.googleapis.com/maps/api/js?' + params.toString();
    this.lazyLoadingScriptService.loadScript(googlePlacesScriptUrl).subscribe(
      () => {
        this.initComponent();
      }
    );
  }

  private initComponent() {
    this.autoCompleteService = new google.maps.places.AutocompleteService();
    this.placesService = new google.maps.places.PlacesService(this.attributions.nativeElement);

    this.dataSource = new Observable((observer: any) => {
      // runs on every search
      observer.next(this.inputText);
    }).pipe(
      switchMap((input: string) => this.getPredictionsAsObservable(input))
    );
  }

  getPredictionsAsObservable(input: string): Observable<AutocompletePrediction[]> {
    const request: AutocompletionRequest = {
      ...this.autocompletionOptions,
      input
    };

    const callBackAsObservable = bindCallback((arg, callbackFunc) => {
      this.autoCompleteService.getPlacePredictions(arg, (result, status) => {
        // run inside zone to correctly trigger change detection
        this.ngZone.run(() => callbackFunc(result, status));
      });
    });
    return callBackAsObservable(request).pipe(
      map(result => {
        const predictions: AutocompletePrediction[] = result[0];
        const status: PlacesServiceStatus = result[1];

        if (status === 'OK') {
          return predictions;
        } else {
          return [];
        }
      })
    );
  }

  optionSelect($event: TypeaheadMatch) {
    const data = $event.item as AutocompletePrediction;
    const request: PlaceDetailsRequest = {
      placeId: data.place_id,
      fields: ['geometry', 'formatted_address'],
      ...this.placesDetailsOptions
    };

    this.placesService.getDetails(request, (result, status) => {
      // run inside zone to correctly trigger change detection
      this.ngZone.run(() => this.addressChanged.emit(result));
    });
  }
}
