import React, { Component } from "react";
import styles from "./ProductCart.module.scss";

import DeleteSvg from "../../svgs/DeleteSvg";
export default class Product extends Component {
  render() {
    const { data } = this.props;
    // imgPath, name, price

    return (
      <>
        {data.map((product, index) => (
          <div className={styles.cart_Product} key={index}>
            <img className={styles.image} src={product.imgPath} alt="product" />
            <div className={styles.des_pri}>
              <p className={styles.details}>{product.name}</p>
              <span className={styles.price}>{product.price} EGP</span>
            </div>
            <span>
              <DeleteSvg />
            </span>
          </div>
        ))}
      </>
    );
  }
}
