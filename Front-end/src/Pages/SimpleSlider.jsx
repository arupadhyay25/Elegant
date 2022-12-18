import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="./Images/home/homeslider2.jpg" />
          </div>
          <div>
            <img src="./Images/home/homeslider1.gif" />
          </div>
          <div>
            <img src="./Images/home/homeslider3.jpg" />
          </div>
          <div>
            <img src="./Images/home/homeslider4.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
