export interface AddressSuggestionInterface {
  placeId: string;
  mainText: string;
  secondaryText: string;
}

export interface AddressSuggestionResponseInterface {
  id: string;
  text: string;
  place_name: string;
}
