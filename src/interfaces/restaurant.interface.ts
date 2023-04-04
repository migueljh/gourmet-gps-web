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
