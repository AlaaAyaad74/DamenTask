import React, { Component } from "react";
import styles from "./Header.module.scss";
import Cart from "../cart/Cart";
export default class Header extends Component {
  constructor() {
    super();
    this.state = { openLinks: false, openCart: false };
  }
  toggleLinks() {
    this.setState({ openLinks: !this.state.openLinks });
  }
  toggleCart() {
    this.setState({ openCart: !this.state.openCart });
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
            <a href="/">
              <img src="./images/Damen Cash colored English.svg" alt="logo" />
            </a>
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
                  <a href={`${item.path}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*left side of header*/}
        <div className={styles.icons_cont}>
          <span className={styles.icon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11C20 12.78 19.4722 14.5201 18.4832 16.0001C17.4943 17.4802 16.0887 18.6337 14.4442 19.3149C12.7996 19.9961 10.99 20.1743 9.24419 19.8271C7.49836 19.4798 5.89472 18.6226 4.63604 17.364C3.37737 16.1053 2.5202 14.5016 2.17294 12.7558C1.82567 11.01 2.0039 9.20038 2.68509 7.55585C3.36628 5.91131 4.51983 4.50571 5.99987 3.51677C7.47991 2.52784 9.21997 2 11 2C13.387 2 15.6761 2.94821 17.364 4.63604C19.0518 6.32387 20 8.61305 20 11V11Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.93 20.69C19.46 22.29 20.67 22.45 21.6 21.05C22.45 19.77 21.89 18.72 20.35 18.72C20.1055 18.6964 19.859 18.7373 19.6353 18.8386C19.4115 18.9399 19.2181 19.0981 19.0745 19.2974C18.9308 19.4966 18.8419 19.7301 18.8166 19.9744C18.7912 20.2188 18.8303 20.4655 18.93 20.69V20.69Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
          </span>

          <span
            style={{ position: "relative" }}
            className={styles.icon}
            onClick={() => this.toggleCart()}
          >
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
          </span>
          <span className={styles.icon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1401_361)">
                <path
                  d="M12.16 10.87C12.0502 10.86 11.9398 10.86 11.83 10.87C10.6662 10.8267 9.56585 10.3285 8.7656 9.48239C7.96536 8.63629 7.52914 7.50991 7.55075 6.34552C7.57237 5.18112 8.05011 4.07172 8.88121 3.2559C9.71231 2.44009 10.8304 1.98303 11.995 1.98303C13.1596 1.98303 14.2777 2.44009 15.1088 3.2559C15.9399 4.07172 16.4176 5.18112 16.4392 6.34552C16.4608 7.50991 16.0246 8.63629 15.2244 9.48239C14.4241 10.3285 13.3238 10.8267 12.16 10.87Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15997 14.561C4.73997 16.181 4.73997 18.821 7.15997 20.431C8.67323 21.3341 10.4027 21.811 12.165 21.811C13.9273 21.811 15.6567 21.3341 17.17 20.431C19.59 18.811 19.59 16.171 17.17 14.561C15.6551 13.6626 13.9262 13.1885 12.165 13.1885C10.4037 13.1885 8.67488 13.6626 7.15997 14.561V14.561Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1401_361">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className={styles.toggle_Btn}>
          <button onClick={() => this.toggleLinks()}>
            <img src="./images/bars-solid.svg" />
          </button>
        </div>
      </div>
    );
  }
}
