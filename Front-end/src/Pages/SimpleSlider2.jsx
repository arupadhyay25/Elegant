import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let Images = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1669138226.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg",
  },
  {
    image: "https://images.bewakoof.com/uploads/grid/app/image-1668598708.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg",
  },
];
export default class AutoPlay2 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
    };
    return (
      <div style={{ width: "70%", margin: "auto" }}>
        <Slider {...settings}>
          {Images.map((e) => (
            <div>
              <img src={e.image} alt="slider" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
