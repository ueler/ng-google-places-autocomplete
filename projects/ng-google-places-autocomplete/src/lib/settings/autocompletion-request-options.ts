import ComponentRestrictions = google.maps.places.ComponentRestrictions;
import LatLngBoundsLiteral = google.maps.LatLngBoundsLiteral;
import LatLngBounds = google.maps.LatLngBounds;
import LatLng = google.maps.LatLng;
import AutocompleteSessionToken = google.maps.places.AutocompleteSessionToken;

export interface AutocompletionRequestOptions {
  bounds?: LatLngBounds | LatLngBoundsLiteral;
  componentRestrictions?: ComponentRestrictions;
  location?: LatLng;
  offset?: number;
  radius?: number;
  sessionToken?: AutocompleteSessionToken;
  types?: string[];
}
