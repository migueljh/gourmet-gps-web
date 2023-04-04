import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_GOURMET_GPS_API_BASE_URL;

export const fetchNearbyRestaurants = async (
  location?: string,
  latitude?: number,
  longitude?: number
) => {
  const decodedLocation = decodeURIComponent(location).replace(/\+/g, " ");
  const response = await axios.get(`${API_BASE_URL}/api/restaurants`, {
    params: {
      location: decodedLocation,
      latitude,
      longitude,
    },
  });
  return response.data;
};

export const fetchRestaurantDetails = async (restaurantId: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/restaurants/${restaurantId}`
  );
  return response.data;
};

export const fetchRestaurantReviews = async (restaurantId: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/restaurants/${restaurantId}/reviews`
  );
  return response.data;
};
