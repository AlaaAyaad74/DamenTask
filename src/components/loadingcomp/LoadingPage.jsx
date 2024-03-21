import React, { Component } from "react";
import styles from "./LoadingStyle.module.scss";

export default class LoadingPage extends Component {
  render() {
    return (
      <div className={styles.container_Loadings}>
        <div className={styles.center}>
          <img
            src="./images/Damen Cash colored English.svg"
            alt="logo"
            className={styles.image}
          />
          <div className={styles.line}>
            <div className={styles.cover}></div>
          </div>
        </div>
      </div>
    );
  }
}
