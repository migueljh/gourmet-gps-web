import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressSuggestionInterface } from "../../interfaces";

interface LocationState {
  suggestions: AddressSuggestionInterface[];
  selectedLocation: string | null;
  latitude: number | null;
  longitude: number | null;
}

const initialState: LocationState = {
  suggestions: [],
  selectedLocation: null,
  latitude: null,
  longitude: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setSuggestions: (
      state,
      action: PayloadAction<AddressSuggestionInterface[]>
    ) => {
      state.suggestions = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
    setLatitude: (state, action: PayloadAction<number>) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action: PayloadAction<number>) => {
      state.longitude = action.payload;
    },
  },
});

export const {
  setSuggestions,
  setSelectedLocation,
  setLatitude,
  setLongitude,
} = locationSlice.actions;
export default locationSlice.reducer;
