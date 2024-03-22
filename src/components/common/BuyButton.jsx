import React, { Component } from "react";
import styles from "./BuyButton.module.scss";
import { UserConsumer } from "../UserContext";
import { Link } from "react-router-dom";
export default class BuyButton extends Component {
  render() {
    const { style, textStyle, text, item } = this.props;
    return (
      <UserConsumer>
        {({ addItem }) => (
          <>
            {item ? (
              <a
                className={styles.buy_btn + " " + style}
                onClick={() => addItem(item)}
              >
                <span className={styles.text + " " + textStyle}>
                  {text.toUpperCase()}
                </span>
              </a>
            ) : (
              <Link to="/" className={styles.buy_btn + " " + style}>
                <span className={styles.text + " " + textStyle}>
                  {text.toUpperCase()}
                </span>
              </Link>
            )}
          </>
        )}
      </UserConsumer>
    );
  }
}
