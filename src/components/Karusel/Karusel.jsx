import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Karusel.css"
export const Karusel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  return (
    <div className="slider">
    <div className="slider_text">С нами сотрудничают</div>
    <div className="ortaga_opchiq">
      <Slider {...settings} className="slider_width">
        <div className="slider_img_box">
          <img
            src="https://cdn.dribbble.com/users/2998321/screenshots/16243707/frame_85_4x.jpg"
            alt=""
            className="img_karusel"
          />
        </div>
        <div className="slider_img_box">
          <img
            src="https://logobank.uz:8005/media/logos_png/CAMBRIDGE-01.png"
            alt=""
            className="img_karusel"
          />
        </div>
        <div className="slider_img_box">
          <img
            src="https://www.spot.uz/media/img/2019/05/QU2AG715592005873613_b.jpg"
            alt=""
            className="img_karusel"
          />
        </div>
        <div className="slider_img_box">
          <img
            src="https://www.afisha.uz/uploads/media/2020/11/0288234_m.png"
            alt=""
            className="img_karusel"
          />
        </div>
        <div className="slider_img_box">
          <img
            src="https://www.afisha.uz/uploads/media/2016/09/0718741_m.png"
            alt=""
            className="img_karusel"
          />
        </div>
        <div className="slider_img_box">
          <img
            src="https://www.afisha.uz/uploads/media/2018/09/0050011_m.png"
            alt=""
            className="img_karusel"
          />
        </div>
      </Slider>
    </div>
  </div>
  )
}
