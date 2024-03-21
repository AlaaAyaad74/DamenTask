import React, { Component } from "react";
import styles from "./ProductCart.module.scss";
import image from "../../../utils/images/image 1.png";
export default class Product extends Component {
  render() {
    return (
      <div className={styles.cart_Product}>
        <img className={styles.image} src={image} alt="product" />
        <div className={styles.des_pri}>
          <p className={styles.details}>name of product</p>
          <span className={styles.price}>400 EGP</span>
        </div>
        <span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1426_90)">
              <path
                d="M21 6.47998C17.67 6.14998 14.32 5.97998 10.98 5.97998C8.99622 5.98017 7.01371 6.0803 5.04 6.27998L3 6.47998"
                stroke="#FF0000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 5.47L8.72 4.16C8.88 3.21 9 2.5 10.69 2.5H13.31C15 2.5 15.13 3.25 15.28 4.17L15.5 5.47"
                stroke="#FF0000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.8499 9.64001L18.1999 19.71C18.0899 21.28 17.9999 22.5 15.2099 22.5H8.7899C5.9999 22.5 5.9099 21.28 5.7999 19.71L5.1499 9.64001"
                stroke="#FF0000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3301 17H13.6601"
                stroke="#FF0000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 13H14.5"
                stroke="#FF0000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1426_90">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    );
  }
}
