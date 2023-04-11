/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Swiper } from "swiper/react";

import { SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper/core";
import { useState } from "react";

SwiperCore.use([Navigation]);

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  // when window width is >= 480px
  740: { slidesPerView: 2, spaceBetween: 20 },
  // when window width is >= 1000px
  1000: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const ModalSlider = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageClick = (index) => swiperInstance.slideTo(index, 500);
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    740: { slidesPerView: 2.2, spaceBetween: 20 },
    // when window width is >= 1000px
    1000: {
      slidesPerView: data.gallery.length,
      spaceBetween: 30,
    },
  };
  return (
    <div className="swiper-container w-full md:w-1/2  self-start">
      {data.gallery.length > 0 ? (
        <>
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
          <Swiper breakpoints={breakpoints} className="mt-8 ">
            {data.gallery.map(({ original: path, id }, i) => (
              <SwiperSlide
                onClick={() => {
                  setActiveIndex(i);
                  imageClick(i);
                }}
                key={id}
                className={`border-2 border-fontColor rounded-sm cursor-pointer ${
                  activeIndex === i ? "" : "opacity-50"
                }`}
              >
                <img src={path} alt="product-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <img
            src={data.image.original || `/placeholder-image.png`}
            className="max-w-sm m-auto object-cover"
          />
        </>
      )}
    </div>
  );
};

export default ModalSlider;
