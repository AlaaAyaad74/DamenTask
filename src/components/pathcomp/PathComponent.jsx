import React, { Component } from "react";
import styles from "./PathComp.module.scss";
export default class PathComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.path}>Home / Products / POS / Name of product</p>
      </div>
    );
  }
}
