import React from "react";

import { NoDataIcon } from "../../icons";

import { NoDataFoundInterface } from "../../interfaces/no-data.interface";

import styles from "./no-data-found.module.scss";

const NoDataFound = ({ text }: NoDataFoundInterface): JSX.Element => {
  return (
    <div className={styles.noDataNoResults}>
      <NoDataIcon />
      <p>{text}</p>
    </div>
  );
};

export default React.memo(NoDataFound);
