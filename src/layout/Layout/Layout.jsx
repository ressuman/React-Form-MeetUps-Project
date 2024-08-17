import MainNavigation from "../Navigation/MainNavigation";
import styles from "./Layout.module.css";
import React from "react";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
