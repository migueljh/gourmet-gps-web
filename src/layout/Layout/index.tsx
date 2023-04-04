import React from "react";

import Header from "../Header";

import styles from "./layout.module.scss";

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.layoutWrapper}>{children}</div>
    </div>
  );
};

export default Layout;
