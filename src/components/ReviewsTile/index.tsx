import React from 'react';

import { ReviewInfoInterface } from '../../interfaces/reviews.interface';

import { PeopleReviewIcon } from '../../Icons/reviews.icons';

import styles from './reviews-tile.module.scss';

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
