/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Swiper } from "swiper/react";

import { SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper/core";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation]);

const ModalSlider = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageClick = (index) => swiperInstance.slideTo(index, 500);

  return (
    <div className="swiper-container w-full md:w-1/2  self-start">
      <Swiper
        slidesPerView={1}
        navigation={true}
        className="mySwiper h-72 w-full"
        onSlideChange={(e) => setActiveIndex(e.el.swiper.activeIndex)}
        onSwiper={setSwiperInstance}
      >
        {data.gallery.map(({ original: path, id }) => (
          <SwiperSlide key={id} className="w-full">
            <img
              src={path}
              alt="product-image"
              className="w-full object-contain h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 flex justify-between items-center">
        {data.gallery.map(({ original: path, id }, i) => (
          <div
            onClick={() => {
              setActiveIndex(i);
              imageClick(i);
            }}
            key={id}
            className={`border-2 border-fontColor w-1/6 rounded-sm cursor-pointer ${
              activeIndex === i ? "" : "opacity-50"
            }`}
          >
            <img src={path} alt="product-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalSlider;
