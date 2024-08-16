import MainNavigation from "../Navigation/MainNavigation";
import styles from "./Layout.module.css";
import React from "react";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </React.Fragment>
  );
}
