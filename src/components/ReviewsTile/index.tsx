import React from "react";

import { ReviewInfoInterface } from "../../interfaces";

import { PeopleReviewIcon } from "../../icons";

import styles from "./reviews-tile.module.scss";

const ReviewsTile = ({ text }: ReviewInfoInterface): JSX.Element => {
  return (
    <div className={styles.reviewsTileContainer}>
      <i>
        <PeopleReviewIcon />
      </i>
      {text}
    </div>
  );
};

export default React.memo(ReviewsTile);
