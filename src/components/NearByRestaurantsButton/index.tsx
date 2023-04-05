import React from "react";

import { LocationIcon } from "../../assets";

import { NearByRestaurantsButtonInterface } from "../../interfaces";

import styles from "./near-restaurants-button.module.scss";

const NearByRestaurantsButton = ({
  selectedLocation,
  setRenderModal,
}: NearByRestaurantsButtonInterface) => {
  return (
    <button
      className={styles.nearByRestaurantsButtonToShowModal}
      onClick={() => setRenderModal(true)}
    >
      <i>
        <LocationIcon />
      </i>
      {selectedLocation ? (
        <strong>{selectedLocation}</strong>
      ) : (
        <p>Search for an address</p>
      )}
    </button>
  );
};

export default NearByRestaurantsButton;
