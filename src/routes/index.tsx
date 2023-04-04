import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantsList from "../views/NearbyRestaurants";
import RestaurantDetails from "../views/RestaurantDetails";

const RoutesHandler: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantsList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
};

export default RoutesHandler;
