import React, { Component } from "react";
import styles from "./Svgs.module.scss";
export default class SearchSvg extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
