import React, { useState, useEffect } from "react";

import { Orbit } from "@uiball/loaders";

import Layout from "../../layout/Layout";
import {
  getRestaurantDetails,
  getRestaurantReviews,
} from "../../controllers/restaurantController";
import { useParams } from "react-router-dom";
import styles from "./restaurant-details.module.scss";
import {
  RestaurantDetailsInterface,
  ReviewInfoInterface,
} from "../../interfaces";
import ReviewsTile from "../../components/ReviewsTile";
import NoDataFoundComponent from "../../components/NoDataFound/index";
import RestaurantInfoCard from "../../components/RestaurantInfoCard";

const RestaurantDetails: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantDetailsInterface>(null);
  const [reviews, setReviews] = useState<ReviewInfoInterface[]>([]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchRestaurantData(id);
    }
  }, [id]);

  const fetchRestaurantData = async (id: string) => {
    try {
      const [details, reviews] = await Promise.all([
        getRestaurantDetails(id),
        getRestaurantReviews(id),
      ]);
      setRestaurantDetails(details);
      setReviews(reviews);
    } catch (error) {
      console.error("Failed to fetch restaurant details and reviews.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className={styles.restaurantDetailContainer}>
        {loading ? (
          <div className={styles.restaurantDetailSpinnerContainer}>
            <Orbit size={35} color="#f8884f" />
          </div>
        ) : (
          <>
            {restaurantDetails ? (
              <div className={styles.restaurantDetailContainer}>
                <RestaurantInfoCard {...restaurantDetails} />
              </div>
            ) : null}

            {reviews.length > 0 ? (
              <div className={styles.restaurantDetailsReviewsContainer}>
                <h1 className={styles.restaurantDetailsReviewsTitle}>
                  Customer reviews
                </h1>

                {reviews.map((customerReview) => {
                  return (
                    <div key={customerReview.id}>
                      <ReviewsTile text={customerReview.text} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.restaurantDetailsNoReviewsFounded}>
                <NoDataFoundComponent
                  text={"Sorry, there are no reviews at this time"}
                />
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default RestaurantDetails;
