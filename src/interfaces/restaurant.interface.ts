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
  address1: string;
  address2: null;
  address3: null;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  image_url: string;
  display_address: string[];
}

export interface Category {
  alias: string;
  title: string;
}
