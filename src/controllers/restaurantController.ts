import {
  RestaurantInfoInterface,
  RestaurantDetailsInterface,
  ReviewInfoInterface,
} from "../interfaces";
import {
  fetchNearbyRestaurants,
  fetchRestaurantDetails,
  fetchRestaurantReviews,
} from "../services/restaurantService";

export const getNearbyRestaurants = async (
  address?: string,
  latitude?: number,
  longitude?: number
): Promise<RestaurantInfoInterface[]> => {
  try {
    const decodedLocation = decodeURIComponent(address).replace(/\+/g, " ");
    const data = await fetchNearbyRestaurants(
      decodedLocation,
      latitude,
      longitude
    );
    const restaurants: RestaurantInfoInterface[] = data.businesses.map(
      (restaurant: RestaurantInfoInterface) => ({
        id: restaurant.id,
        name: restaurant.name,
        alias: restaurant.alias,
        rating: restaurant.rating,
        location: restaurant.location,
        image_url: restaurant.image_url,
        categories: restaurant.categories,
      })
    );
    return restaurants;
  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    throw error;
  }
};

export const getRestaurantDetails = async (
  restaurantId: string
): Promise<RestaurantDetailsInterface> => {
  try {
    const data = await fetchRestaurantDetails(restaurantId);
    const details: RestaurantDetailsInterface = {
      id: data.id,
      name: data.name,
      phone: data.phone,
      image_url: data.image_url,
      location: data.location,
      categories: data.categories,
      rating: data.rating,
    };
    return details;
  } catch (error) {
    console.error("Error fetching restaurant details:", error);
    throw error;
  }
};

export const getRestaurantReviews = async (
  restaurantId: string
): Promise<ReviewInfoInterface[]> => {
  try {
    const data = await fetchRestaurantReviews(restaurantId);
    const reviews: ReviewInfoInterface[] = data.reviews.map(
      (review: ReviewInfoInterface) => ({
        id: review.id,
        text: review.text,
      })
    );
    return reviews;
  } catch (error) {
    console.error("Error fetching restaurant reviews:", error);
    throw error;
  }
};
