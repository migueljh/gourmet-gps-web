import React from "react";

import { Link } from "react-router-dom";

import { RestaurantInfoInterface } from "../../interfaces";

import { RatingStarIcon } from "../../icons";

import styles from "./restaurant-tile.module.scss";

const RestaurantTile = ({
  name,
  alias,
  rating,
  image_url,
  categories,
}: RestaurantInfoInterface): JSX.Element => {
  return (
    <button className={styles.restaurantTileContainer}>
      <Link to={`/restaurant/${alias}`} title={`View details of ${name}`}>
        <img
          src={image_url ? image_url : "/gourmet-gps-logo.svg"}
          alt={`restaurant_${name}_logo`}
          title={`Logo of ${name}`}
          className={styles.restaurantTileImg}
        />

        <div className={styles.restaurantTileCategoriesSticker}>
          {categories[0].title}
        </div>

        <span className={styles.restaurantTileNameRating}>
          <p className={styles.restaurantTileName}>{name}</p>

          <div className={styles.restaurantTileRatingContainer}>
            <i>
              <RatingStarIcon />
            </i>
            <p>{rating}</p>
          </div>
        </span>
      </Link>
    </button>
  );
};

export default React.memo(RestaurantTile);
