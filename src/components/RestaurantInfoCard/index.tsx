import styles from "./restaurant-info-card.module.scss";

import { RatingStarIcon } from "../../assets/restaurant.icons";

import { RestaurantInfoCardInterface } from "../../interfaces/restaurant.interface";

const RestaurantInfoCard = ({
  image_url,
  categories,
  name,
  rating,
  location,
}: RestaurantInfoCardInterface): JSX.Element => {
  return (
    <div className={styles.restaurantDetailTopContainer}>
      <img
        src={image_url ? image_url : "/gourmet-gps-logo.svg"}
        className={styles.restaurantDetailBanner}
        alt={`restaurant_img`}
      />

      <div className={styles.restaurantDetailRestInfo}>
        <span className={styles.restaurantDetailCategoriesBox}>
          {categories[0].title}
        </span>
        <h1 className={styles.restaurantDetailsRestTitle}>{name}</h1>

        <span className={styles.restaurantDetailsRatingBox}>
          <p>{rating}</p>
          <RatingStarIcon />
        </span>

        <p className={styles.restaurantDetailAddress}>
          {location.display_address.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
