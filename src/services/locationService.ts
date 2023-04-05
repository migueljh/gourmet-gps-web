import apiClient from "./apiClient";

const API_KEY = import.meta.env.VITE_MAPBOX_API_KEY;

export const geocodeAddress = async (input: string) => {
  const { data } = await apiClient.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${API_KEY}`
  );
  return data;
};

export const reverseGeocodeAddress = async (
  latitude: number,
  longitude: number
) => {
  const { data } = await apiClient.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${API_KEY}`
  );
  return data;
};
