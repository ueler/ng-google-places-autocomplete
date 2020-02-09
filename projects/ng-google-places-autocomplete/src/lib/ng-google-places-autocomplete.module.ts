import {NgModule} from '@angular/core';
import {NgGooglePlacesAutocompleteComponent} from './ng-google-places-autocomplete.component';
import {CommonModule} from '@angular/common';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [NgGooglePlacesAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  exports: [NgGooglePlacesAutocompleteComponent]
})
export class NgGooglePlacesAutocompleteModule {
}
