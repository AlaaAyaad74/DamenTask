import React, { Component } from "react";
import styles from "./BuyButton.module.scss";
export default class BuyButton extends Component {
  render() {
    const { style, textStyle, text } = this.props;
    return (
      <div>
        <a href="/" className={styles.buy_btn + " " + style}>
          <span className={styles.text + " " + textStyle}>
            {text.toUpperCase()}
          </span>
        </a>
      </div>
    );
  }
}
