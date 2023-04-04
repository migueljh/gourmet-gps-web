import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantInfoInterface } from "../../interfaces";

interface RestaurantState {
  restaurants: RestaurantInfoInterface[];
}

const initialState: RestaurantState = {
  restaurants: [],
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (
      state,
      action: PayloadAction<RestaurantInfoInterface[]>
    ) => {
      state.restaurants = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
