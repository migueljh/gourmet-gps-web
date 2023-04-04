import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./slices/restaurantSlice";
import locationReducer from "./slices/locationSlice";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  location: locationReducer,
});

export default rootReducer;
