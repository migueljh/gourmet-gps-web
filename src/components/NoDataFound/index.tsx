import React from 'react';

import { NoDataIcon } from '../../Icons/reviews.icons';

import styles from './no-data-found.module.scss';

const NoDataFound = ({ text }: { text: string }): JSX.Element => {
  return (
    <div className={styles.noDataNoResults}>
      <NoDataIcon />
      <p>{text}</p>
    </div>
  );
};

export default React.memo(NoDataFound);
