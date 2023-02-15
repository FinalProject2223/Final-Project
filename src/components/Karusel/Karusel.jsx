import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Karusel.css"
export const Karusel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "none"
  };


  return (
   <div className='ortaga_opchiq'>
     <Slider {...settings} className="slider_width">
          <div className='slider_img_box'>
            <img src="https://yt3.googleusercontent.com/kqQRPQPl1c-EmKH4lgJJqtmtT4WT3IPcbzHcyfOJhTuCdq-N0oCTllYBcse-JG1O4R18y7_2=s900-c-k-c0x00ffffff-no-rj" alt="" className='img_karusel' />
          </div>
          <div className='slider_img_box'>
            <img src="https://yt3.googleusercontent.com/5zbMq2YIFxg6mfQZ2WW-v5jk_zeY-HqqQ3rwwzGg9DIZMpz7U2VYG-w7p7FQVlCncEykgsSkkw=s900-c-k-c0x00ffffff-no-rj" alt="" className='img_karusel' />
          </div>
          <div className='slider_img_box'>
            <img src="https://www.spot.uz/media/img/2019/05/QU2AG715592005873613_b.jpg" alt="" className='img_karusel' />
          </div>
          <div className='slider_img_box'>
            <img src="https://yt3.googleusercontent.com/kqQRPQPl1c-EmKH4lgJJqtmtT4WT3IPcbzHcyfOJhTuCdq-N0oCTllYBcse-JG1O4R18y7_2=s900-c-k-c0x00ffffff-no-rj" alt="" className='img_karusel' />
          </div>
          <div className='slider_img_box'>
            <img src="https://yt3.googleusercontent.com/kqQRPQPl1c-EmKH4lgJJqtmtT4WT3IPcbzHcyfOJhTuCdq-N0oCTllYBcse-JG1O4R18y7_2=s900-c-k-c0x00ffffff-no-rj" alt="" className='img_karusel' />
          </div>
         
         
        </Slider>
   </div>
  )
}
