import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import ProductCard from "./../productcard/ProductCard";
import { DummyData } from "../../utils/service/DummyData";
export default class SliderProduct extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>you may also like</h1>
        <Slider {...settings}>
          {DummyData.map((item, index) => (
            <ProductCard
              key={index}
              image={item.imgPath}
              model={item.model}
              description={item.description}
              rate={item.rate}
              price={item.price}
              /**/
              item={item}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
