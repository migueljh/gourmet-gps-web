import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface SearchModalInterface {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  getCurrentLocation: () => void;
}

export interface SearchBarInterface {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface SuggestionsListInterface {
  suggestions: SuggestionInterface[];
  onSuggestionClick: (suggestion: SuggestionInterface) => void;
}

export interface SuggestionInterface {
  secondaryText: string;
}
