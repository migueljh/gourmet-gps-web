import { Dispatch } from "react";
export interface RestaurantInfoInterface {
  id: string;
  name: string;
  alias: string;
  rating: number;
  location: RestaurantInfoLocationInterface;
  image_url: string;
  categories: Category[];
}

export interface RestaurantDetailsInterface {
  id: string;
  name: string;
  phone: string;
  image_url: string;
  location: RestaurantInfoLocationInterface;
  categories: Category[];
  rating: number;
}

export interface RestaurantInfoLocationInterface {
  display_address: string[];
}

export interface Category {
  alias: string;
  title: string;
}

export interface NearByRestaurantsButtonInterface {
  selectedLocation: string | null;
  setRenderModal: Dispatch<React.SetStateAction<boolean>>;
}

export interface RestaurantInfoCardInterface {
  image_url: string;
  categories: Array<{ title: string }>;
  name: string;
  rating: number;
  location: { display_address: Array<string> };
}
