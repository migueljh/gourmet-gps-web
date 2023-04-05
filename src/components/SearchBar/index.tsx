import React from "react";

import { SearchBarInterface } from "../../interfaces";

import { LocationIcon } from "../../assets";

import styles from "./search-bar.module.scss";

const SearchBar = ({
  value,
  onChange,
  placeholder,
}: SearchBarInterface): JSX.Element => {
  return (
    <div className={styles.searchBarInputSearchContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.searchBarInputSearch}
      />
      <i>
        <LocationIcon />
      </i>
    </div>
  );
};

export default SearchBar;
