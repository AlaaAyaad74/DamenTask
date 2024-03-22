import React, { Component } from "react";
import styles from "./GeneralStyleCard.module.scss";
import image1 from "../../utils/images/image 1.png";
import StarsComponent from "../common/StarsComponent";
import BuyButton from "../common/BuyButton";
import { Link } from "react-router-dom";
import IncreaseSvg from "../svgs/IncreaseSvg";
import DecreaseSvg from "../svgs/DecreaseSvg";
import WishListSvg from "./../svgs/WishListSvg";
import ShareSvg from "../svgs/ShareSvg";
export default class GeneralCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cont_image}>
          <img src={image1} alt=" product" />
          <span className={styles.discount}>
            <p>10% Off</p>
          </span>
        </div>
        {/**left Hand */}
        <div className={styles.cont_desc}>
          <h2 className={styles.name_Product}>Name of Product</h2>
          <p className={styles.starsRate}>
            <StarsComponent numStars={5} width="25.05" height="25.05" />
          </p>
          <div className={styles.price}>
            <p className={styles.end_Price}>3000 EP</p>
            <p className={styles.before_Dis}>3560 EGP</p>
          </div>
          <p className={styles.para_details}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
          </p>
          <div className={styles.num_Orders}>
            <div className={styles.decrease_btn}>
              <span>
                <DecreaseSvg />
              </span>
            </div>
            <p className={styles.num_Products}>1</p>
            <div className={styles.increase_btn}>
              <span>
                <IncreaseSvg />
              </span>
            </div>
          </div>
          {/*Buy Button Component*/}
          <BuyButton
            style={styles.buy_btn}
            textStyle={styles.text}
            text={"Buy now"}
          />
          <div className={styles.activity_cus}>
            <Link to="/" className={styles.wishList}>
              <span className={styles.icons_Details}>
                <WishListSvg />
              </span>
              <p>add to wishlist</p>
            </Link>
            <Link href="/" className={styles.share}>
              <span className={styles.icons_Details}>
                <ShareSvg />
              </span>
              <p>share</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
