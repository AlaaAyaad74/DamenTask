import React, { Component } from "react";
import styles from "./BuyButton.module.scss";
import { UserConsumer } from "../UserContext";
export default class BuyButton extends Component {
  render() {
    const { style, textStyle, text, item } = this.props;
    return (
      <UserConsumer>
        {(data) => (
          <>
            {item ? (
              <a
                className={styles.buy_btn + " " + style}
                onClick={() => data.push(item)}
              >
                <span className={styles.text + " " + textStyle}>
                  {text.toUpperCase()}
                </span>
              </a>
            ) : (
              <a href="/" className={styles.buy_btn + " " + style}>
                <span className={styles.text + " " + textStyle}>
                  {text.toUpperCase()}
                </span>
              </a>
            )}
          </>
        )}
      </UserConsumer>
    );
  }
}
