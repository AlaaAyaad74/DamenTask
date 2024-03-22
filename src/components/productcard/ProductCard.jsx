import React, { Component } from "react";
// import image from "../../utils/images/image 2.png";
import styles from "./ProductCard.module.scss";
import StarsComponent from "./../common/StarsComponent";
import BuyButton from "../common/BuyButton";
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1401_535)">
              <path
                d="M12.8194 20.6284C12.4274 20.7446 12.0101 20.7446 11.6181 20.6284C8.80874 19.6694 2.53124 15.6684 2.53124 8.88718C2.5292 8.1779 2.66692 7.47517 2.93653 6.81913C3.20613 6.16309 3.60234 5.56659 4.10253 5.0637C4.60271 4.56082 5.19707 4.1614 5.85165 3.88827C6.50624 3.61514 7.20821 3.47364 7.91749 3.47186C8.75429 3.47145 9.57949 3.66761 10.3266 4.04453C11.0737 4.42145 11.7218 4.96859 12.2187 5.64186C12.8946 4.73187 13.8409 4.0589 14.9223 3.71919C16.0037 3.37949 17.1649 3.39045 18.2397 3.75051C19.3145 4.11057 20.2479 4.80129 20.9065 5.72388C21.565 6.64648 21.915 7.75369 21.9062 8.88718C21.9062 15.6684 15.6287 19.6694 12.8194 20.6284Z"
                stroke="#292D32"
                strokeWidth="1.45312"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1401_535">
                <rect
                  width="23.25"
                  height="23.25"
                  fill="white"
                  transform="translate(0.59375 0.46875)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    );
  }
}
