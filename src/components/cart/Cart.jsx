import React, { Component } from "react";
import styles from "./Cart.module.scss";
import ProductCart from "./productincart/ProductCart";
import BuyButton from "./../common/BuyButton";
export default class Cart extends Component {
  render() {
    const { toggleCart } = this.props;
    return (
      <>
        <div className={styles.before_Cart}></div>
        <div className={styles.cart}>
          <div className={styles.Row}>
            <h6 className={styles.cart_title}>MY CART(4)</h6>
            <span className={styles.closeBtn} onClick={() => toggleCart()}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7878 11.7878L19.6464 19.6464"
                  stroke="black"
                  strokeWidth="1.57171"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6465 11.7878L11.7879 19.6464"
                  stroke="black"
                  strokeWidth="1.57171"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <ProductCart />
          <ProductCart />
          <div
            className={styles.Row}
            style={{ padding: "8px", margin: "15px 0" }}
          >
            <p className={styles.bit}>Sub Total</p>
            <p className={styles.price + " " + "price"}>800 EGP</p>
          </div>
          <BuyButton
            text={"go to cart"}
            style={styles.goButton}
            textStyle={styles.textStyle}
          />
        </div>
      </>
    );
  }
}
