import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getNearbyRestaurants } from "../../controllers/restaurantController";
import { reverseGeocodeAddress } from "../../services/locationService";

import { RootState } from "../../store/store";
import {
  setLatitude,
  setLongitude,
  setSelectedLocation,
} from "../../store/slices/locationSlice";
import { setRestaurants } from "../../store/slices/restaurantSlice";

import { Orbit } from "@uiball/loaders";
import SearchModal from "../../components/SearchModal";
import RestaurantTile from "../../components/RestaurantTile/index";
import NoDataFound from "../../components/NoDataFound";
import NearByRestaurantsButton from "../../components/NearByRestaurantsButton";
import Layout from "../../layout/Layout/index";

import styles from "./near-restaurants.module.scss";

const NearbyRestaurants: React.FC = () => {
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchFinished, setSearchFinished] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { restaurants } = useSelector((state: RootState) => state.restaurants);
  const { selectedLocation } = useSelector(
    (state: RootState) => state.location
  );
  const latitude = useSelector((state: RootState) => state.location.latitude);
  const longitude = useSelector((state: RootState) => state.location.longitude);

  const fetchRestaurants = useCallback(async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const results = await getNearbyRestaurants(selectedLocation);
      dispatch(setRestaurants(results));
      setSearchFinished(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, selectedLocation]);

  const getAddressFromCoordinates = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const data = await reverseGeocodeAddress(latitude, longitude);

        if (data.features.length > 0) {
          const address = data.features[0].place_name;
          dispatch(setSelectedLocation(address));
        } else {
          throw new Error("No address found for the given coordinates.");
        }
      } catch (error) {
        console.error("Error fetching address from coordinates:", error);
        setErrorMessage(error.message);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectedLocation) {
      fetchRestaurants();
    }
  }, [selectedLocation, fetchRestaurants]);

  useEffect(() => {
    if (latitude && longitude) {
      setErrorMessage("");
      getNearbyRestaurants(undefined, latitude, longitude)
        .then((restaurants) => {
          dispatch(setRestaurants(restaurants));
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(error.message);
        });
    }
  }, [latitude, longitude, dispatch]);

  const getCurrentLocation = useCallback(async () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setLatitude(position.coords.latitude));
          dispatch(setLongitude(position.coords.longitude));
          getAddressFromCoordinates(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.error(error);
          setErrorMessage(error.message);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
      alert("Geolocation is not supported by this browser.");
    }
  }, [dispatch, getAddressFromCoordinates]);

  return (
    <Layout>
      <div className={styles.nearByRestaurantsLandingWrapper}>
        <NearByRestaurantsButton
          selectedLocation={selectedLocation}
          setRenderModal={setRenderModal}
        />

        {renderModal && (
          <SearchModal
            setIsOpen={setRenderModal}
            getCurrentLocation={getCurrentLocation}
          />
        )}

        {loading ? (
          <div className={styles.nearByRestaurantsSpinnerContainer}>
            <Orbit size={35} color="#f8884f" />
          </div>
        ) : restaurants.length > 0 && !errorMessage ? (
          <div>
            <h2>Restaurants near to you</h2>
            <ul className={styles.nearByRestaurantsParentRestaurantList}>
              {restaurants.map((restaurant) => (
                <li
                  key={restaurant.id}
                  className={styles.nearByRestaurantsList}
                >
                  <RestaurantTile
                    id={restaurant.id}
                    name={restaurant.name}
                    alias={restaurant.alias}
                    rating={restaurant.rating}
                    location={restaurant.location}
                    image_url={restaurant.image_url}
                    categories={restaurant.categories}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : errorMessage || (searchFinished && restaurants.length === 0) ? (
          <div className={styles.nearByRestaurantsNotFound}>
            <NoDataFound text={"Sorry, we can't find restaurants near you"} />
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default NearbyRestaurants;
