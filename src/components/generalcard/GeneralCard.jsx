import React, { Component } from "react";
import styles from "./GeneralStyleCard.module.scss";
import image1 from "../../utils/images/image 1.png";
export default class GeneralCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cont_image}>
          <img src={image1} />
          <span className={styles.discount}>
            <p>10% Off</p>
          </span>
        </div>
        {/**left Hand */}
        <div className={styles.cont_desc}>
          <h2 className={styles.name_Product}>Name of Product</h2>
          <p className={styles.starsRate}>
            <svg
              width="142"
              height="26"
              viewBox="0 0 142 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5255 0.488647L15.3376 9.1421H24.4379L17.0756 14.4902L19.8877 23.1437L12.5255 17.7955L5.16322 23.1437L7.97535 14.4902L0.613098 9.1421H9.71334L12.5255 0.488647Z"
                fill="#FEB801"
              />
              <path
                d="M41.7515 0.488647L44.5636 9.1421H53.6639L46.3016 14.4902L49.1137 23.1437L41.7515 17.7955L34.3892 23.1437L37.2014 14.4902L29.8391 9.1421H38.9393L41.7515 0.488647Z"
                fill="#FEB801"
              />
              <path
                d="M70.9777 0.488647L73.7898 9.1421H82.89L75.5278 14.4902L78.3399 23.1437L70.9777 17.7955L63.6154 23.1437L66.4275 14.4902L59.0653 9.1421H68.1655L70.9777 0.488647Z"
                fill="#FEB801"
              />
              <path
                d="M100.203 0.488647L103.016 9.1421H112.116L104.754 14.4902L107.566 23.1437L100.203 17.7955L92.8412 23.1437L95.6534 14.4902L88.2911 9.1421H97.3914L100.203 0.488647Z"
                fill="#FEB801"
              />
              <path
                d="M129.429 0.488647L132.242 9.1421H141.342L133.98 14.4902L136.792 23.1437L129.429 17.7955L122.067 23.1437L124.879 14.4902L117.517 9.1421H126.617L129.429 0.488647Z"
                fill="#FEB801"
              />
            </svg>
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
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.01968 7.04434H11.5908"
                    stroke="#808080"
                    strokeWidth="1.4169"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <p className={styles.num_Products}>1</p>
            <div className={styles.increase_btn}>
              <span>
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55948 1.65623V15.0844"
                    stroke="#1C2126"
                    strokeWidth="1.4169"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.27373 8.37019H11.8448"
                    stroke="#1C2126"
                    strokeWidth="1.4169"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <a href="/" className={styles.buy_btn}>
            <span className={styles.text}>BUY NOW</span>
          </a>
          <div className={styles.activity_cus}>
            <a href="/" className={styles.wishList}>
              <span className={styles.icons_Details}>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5847 4.17694C19.1241 3.73101 18.5771 3.37726 17.9752 3.13591C17.3732 2.89456 16.728 2.77034 16.0764 2.77034C15.4248 2.77034 14.7796 2.89456 14.1777 3.13591C13.5757 3.37726 13.0288 3.73101 12.5682 4.17694L11.6148 5.10423L10.6584 4.17884C9.71937 3.32074 8.47157 2.85072 7.18011 2.86865C5.88865 2.88658 4.65531 3.39105 3.74214 4.27486C2.82897 5.15867 2.30795 6.35218 2.28978 7.60178C2.27161 8.85138 2.75773 10.0586 3.64484 10.9669L4.60025 11.8913L11.6148 18.6813L18.6322 11.8913L19.5876 10.966C20.0483 10.5201 20.4137 9.99075 20.6629 9.40821C20.912 8.82566 21.0401 8.20132 21.0399 7.57085C21.0396 6.94039 20.9109 6.31615 20.6613 5.73381C20.4116 5.15147 20.0457 4.62243 19.5847 4.17694V4.17694Z"
                    stroke="#707070"
                    strokeWidth="1.38673"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>add to wishlist</p>
            </a>
            <a href="/" className={styles.share}>
              <span className={styles.icons_Details}>
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.63234 19.8469C1.58202 19.847 1.53225 19.8369 1.48616 19.8174C1.44006 19.7979 1.39865 19.7693 1.36454 19.7335C1.33042 19.6977 1.30434 19.6555 1.28794 19.6095C1.27155 19.5635 1.26519 19.5146 1.26927 19.4661C1.27812 19.3414 2.33979 7.14668 16.2173 6.10039L16.1838 1.50393C16.1834 1.43287 16.2052 1.36334 16.2463 1.30448C16.2875 1.24562 16.3461 1.20018 16.4144 1.17413C16.4827 1.14807 16.5576 1.14262 16.6292 1.1585C16.7008 1.17437 16.7657 1.21082 16.8155 1.26306L24.4538 9.08314C24.5176 9.14837 24.5531 9.23472 24.5531 9.32448C24.5531 9.41424 24.5176 9.5006 24.4538 9.56583L16.7683 17.4564C16.7181 17.5078 16.653 17.5434 16.5816 17.5586C16.5101 17.5737 16.4356 17.5677 16.3678 17.5413C16.2999 17.5149 16.2418 17.4693 16.2011 17.4105C16.1604 17.3517 16.139 17.2825 16.1396 17.2117L16.1838 12.7371C13.446 12.9144 10.773 13.6224 8.32357 14.8191C5.87416 16.0158 3.69839 17.6767 1.92555 19.7032C1.89176 19.7477 1.8476 19.7839 1.79667 19.8089C1.74573 19.8339 1.68944 19.8469 1.63234 19.8469ZM16.9139 2.39694L16.9434 6.4298C16.9441 6.51972 16.9093 6.6065 16.846 6.67235C16.7827 6.73819 16.6957 6.77813 16.603 6.78396C5.43625 7.46657 2.77961 15.339 2.16957 18.3627C5.95107 14.5602 11.0832 12.2883 16.5292 12.0059C16.5789 12.0033 16.6286 12.0106 16.6753 12.0273C16.7219 12.044 16.7646 12.0698 16.8005 12.1031C16.8365 12.1364 16.865 12.1764 16.8843 12.2208C16.9037 12.2651 16.9134 12.3129 16.9129 12.361L16.8746 16.3196L23.6874 9.32591L16.9139 2.39694Z"
                    fill="#707070"
                    stroke="#707070"
                    strokeWidth="0.756534"
                  />
                </svg>
              </span>
              <p>share</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
