import React, { Component } from "react";

import styles from "./ProductCard.module.scss";
import StarsComponent from "./../common/StarsComponent";
import BuyButton from "../common/BuyButton";
import FavSvg from "../svgs/FavSvg";
export default class productCard extends Component {
  render() {
    const { image, model, description, rate, price, item } = this.props;
    return (
      <div className={styles.card_Cont}>
        <img className={styles.image} src={`${image}`} alt="product" />
        <p className={styles.model}>{model}</p>
        <p className={styles.desc + " " + styles.ellipsis_Paragraph}>
          {description}
        </p>
        <div className={styles.stars}>
          <StarsComponent
            width={"22.35px"}
            height={"22.74px"}
            numStars={rate}
          />
        </div>
        <p className={styles.price}>{price} EGP</p>

        <BuyButton
          style={styles.addCartBtn}
          textStyle={styles.text}
          text={"Add to cart"}
          item={item}
        />
        <span className={styles.fav_Icon}>
          <FavSvg />
        </span>
      </div>
    );
  }
}
