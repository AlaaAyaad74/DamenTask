import React, { Component } from "react";
import styles from "./Svgs.module.scss";
import Cart from "../cart/Cart";
import { UserConsumer } from "../UserContext";
export default class CartSvg extends Component {
  constructor() {
    super();
    this.state = { openCart: false, num: 0 };
  }

  toggleCart() {
    this.setState({ openCart: !this.state.openCart });
  }

  render() {
    return (
      <UserConsumer>
        {({ arr }) => (
          <span
            style={{ position: "relative" }}
            className={styles.icon}
            onClick={() => this.toggleCart()}
          >
            {console.log(arr)}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1401_369)">
                <path
                  d="M2 2H3.74C3.99526 2.00054 4.24764 2.0539 4.48128 2.15672C4.71491 2.25953 4.92474 2.40959 5.09756 2.59744C5.27039 2.78529 5.40247 3.00688 5.48549 3.24826C5.56852 3.48963 5.6007 3.74558 5.58 4L4.75 13.96C4.71821 14.3457 4.76673 14.7339 4.8925 15.0999C5.01828 15.4659 5.21857 15.8019 5.48074 16.0866C5.74291 16.3714 6.06127 16.5986 6.4157 16.7541C6.77014 16.9096 7.15296 16.9899 7.54 16.99H18.19C18.8973 16.9766 19.5749 16.703 20.0933 16.2215C20.6117 15.74 20.9345 15.0844 21 14.38L21.54 6.88C21.5732 6.49328 21.5249 6.1039 21.3982 5.73704C21.2714 5.37018 21.069 5.03401 20.8042 4.75029C20.5393 4.46657 20.2178 4.24161 19.8605 4.08997C19.5032 3.93834 19.1181 3.8634 18.73 3.87H5.82"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 20.75C17.5 20.9972 17.4267 21.2389 17.2893 21.4445C17.152 21.65 16.9568 21.8102 16.7284 21.9048C16.4999 21.9995 16.2486 22.0242 16.0061 21.976C15.7637 21.9278 15.5409 21.8087 15.3661 21.6339C15.1913 21.4591 15.0723 21.2363 15.024 20.9939C14.9758 20.7514 15.0005 20.5001 15.0952 20.2716C15.1898 20.0432 15.35 19.848 15.5555 19.7107C15.7611 19.5733 16.0028 19.5 16.25 19.5C16.5815 19.5 16.8995 19.6317 17.1339 19.8661C17.3683 20.1005 17.5 20.4185 17.5 20.75Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 20.75C9.5 20.9972 9.42669 21.2389 9.28934 21.4445C9.15199 21.65 8.95676 21.8102 8.72835 21.9048C8.49995 21.9995 8.24861 22.0242 8.00614 21.976C7.76366 21.9278 7.54093 21.8087 7.36612 21.6339C7.1913 21.4591 7.07225 21.2363 7.02402 20.9939C6.97579 20.7514 7.00054 20.5001 7.09515 20.2716C7.18976 20.0432 7.34998 19.848 7.55554 19.7107C7.7611 19.5733 8.00277 19.5 8.25 19.5C8.58152 19.5 8.89946 19.6317 9.13388 19.8661C9.3683 20.1005 9.5 20.4185 9.5 20.75Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1401_369">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {this.state.openCart ? (
              <Cart toggleCart={() => this.toggleCart} />
            ) : (
              ""
            )}
            <span className={styles.counter_Circle}>
              <p>{arr.length}</p>
            </span>
          </span>
        )}
      </UserConsumer>
    );
  }
}
