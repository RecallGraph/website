import React from "react";
import Slider from "react-slick";

import image1 from '../assets/img/bg.jpg'
import image2 from '../assets/img/bg2.jpg'
import image3 from '../assets/img/bg3.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SectionCarousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
      return (
        <div>
          <h1 style={{color:"gray",textAlign:"center",fontWeight:'bold'}}>Journey So far</h1>  
          <Slider {...settings}>
            <img src={image1} alt="First slide"/>
            <img src={image2} alt="Second slide"/>
            <img src={image3} alt="Third slide"/>
          </Slider>
        </div>
      );
    }
  }
  