import React, { Component } from "react";
import styles from "./Cart.module.scss";
import ProductCart from "./productincart/ProductCart";
import BuyButton from "./../common/BuyButton";
import { UserConsumer } from "../UserContext";
import CloseSvg from "../svgs/CloseSvg";
export default class Cart extends Component {
  render() {
    const { toggleCart } = this.props;
    let totalPrice = 0;

    return (
      <UserConsumer>
        {({ arr }) => (
          <>
            <div className={styles.before_Cart}></div>
            <div className={styles.cart}>
              <div className={styles.Row}>
                <h6 className={styles.cart_title}>MY CART({arr.length})</h6>
                <span className={styles.closeBtn} onClick={() => toggleCart()}>
                  <CloseSvg />
                </span>
              </div>

              {arr.length > 0 ? (
                <ProductCart data={arr.slice(0, 3)} />
              ) : (
                <p className={styles.cart_Empty}>your cart is empty</p>
              )}

              <div
                className={styles.Row}
                style={{ padding: "8px", margin: "15px 0" }}
              >
                <p className={styles.bit}>Sub Total</p>
                <p className={styles.price + " " + "price"}>
                  {arr.map(function (item) {
                    totalPrice += item.price;
                    console.log(totalPrice);
                  })}
                  <>{totalPrice} EGP</>
                </p>
              </div>
              <BuyButton
                text={"go to cart"}
                style={styles.goButton}
                textStyle={styles.textStyle}
              />
              {arr.length > 3 ? (
                <p className={styles.alert}>
                  The maxmum product to display here 3.
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        )}
      </UserConsumer>
    );
  }
}
