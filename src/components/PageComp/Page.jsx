import React, { Component } from "react";
import styles from "../loadingcomp/LoadingStyle.module.scss";
import classes from "./PageComp.module.scss";
export default class Page extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className={styles.container_Loading}>
        <h1 className={classes.mainTitle + " " + styles.center}>{text}</h1>
      </div>
    );
  }
}
