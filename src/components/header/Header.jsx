import React, { Component } from "react";
import styles from "./Header.module.scss";

import CartSvg from "../svgs/CartSvg";
import SearchSvg from "../svgs/SearchSvg";
import UserSvg from "./../svgs/UserSvg";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor() {
    super();
    this.state = { openLinks: false };
  }
  toggleLinks() {
    this.setState({ openLinks: !this.state.openLinks });
  }

  render() {
    const links = [
      {
        name: "Products",
        path: "/products",
      },
      {
        name: "Best Seller",
        path: "/bestseller",
      },
      {
        name: "New Arrival",
        path: "/newarrival",
      },
      {
        name: "About Us",
        path: "/aboutus",
      },
      {
        name: "Contact Us",
        path: "/contactus",
      },
    ];

    return (
      <>
        <div className={styles.container}>
          {/*right side of Header*/}
          <div className={styles.right_cont}>
            <span className={styles.chartsIcon} style={{ marginTop: "20px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H13M3 12H21M3 18H17"
                  stroke="#09090B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={styles.logo}>
              <Link to="/">
                <img
                  src="./images/Damen Cash colored English.svg"
                  alt="logo"
                  loading="lazy"
                />
              </Link>
            </div>

            <div
              className={
                this.state.openLinks
                  ? `${(styles.links, styles.active)}`
                  : `${styles.links}`
              }
            >
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link to={`${item.path}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.icons_cont}>
            <SearchSvg />
            <CartSvg />
            <UserSvg />
          </div>
          <div className={styles.toggle_Btn}>
            <button onClick={() => this.toggleLinks()}>
              <img
                className={styles.bar}
                src="./images/bars-solid.svg"
                alt="icon"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </>
    );
  }
}
