import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.scss";

export default function Banner() {
  const [sliders] = useState([
    {
      id: 1,
      title: "Современные и надежные аккумуляторы для любых задач",
      image: require("../../assets/images/sliderImageOne.jpeg"),
      button: "ПЕРЕЙТИ В КАТАЛОГ",
      imageTitle: "Качественные аккумуляторы",
    },
    {
      id: 2,
      title: "Аккумуляторы, которые не подведут в нужный момент",
      image: require("../../assets/images/sliderImageOne.jpeg"),
      button: "ПЕРЕЙТИ В КАТАЛОГ",
      imageTitle: "Качественные аккумуляторы",
    },
    {
      id: 3,
      title: "Ваш выбор для стабильной работы техники",
      image: require("../../assets/images/sliderImageOne.jpeg"),
      button: "ПЕРЕЙТИ В КАТАЛОГ",
      imageTitle: "Качественные аккумуляторы",
    },
    {
      id: 4,
      title: "Энергия, которая всегда с вами",
      image: require("../../assets/images/sliderImageOne.jpeg"),
      button: "ПЕРЕЙТИ В КАТАЛОГ",
      imageTitle: "Качественные аккумуляторы",
    },
  ]);

  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          //   disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {sliders.map((slider) => {
          return (
            <SwiperSlide key={slider.id}>
              <div className="slider__parent">
                <div className="slider__parent-image-container">
                  <img src={slider.image} alt={slider.imageTitle} />
                  <div className="slider__parent-overlay-container">
                    <h1>{slider.title}</h1>
                    <button>{slider.button}</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
