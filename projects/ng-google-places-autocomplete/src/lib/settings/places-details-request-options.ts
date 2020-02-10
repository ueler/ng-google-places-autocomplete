import AutocompleteSessionToken = google.maps.places.AutocompleteSessionToken;

export interface PlacesDetailsRequestOptions {
  fields?: string[];
  sessionToken?: AutocompleteSessionToken;
}
