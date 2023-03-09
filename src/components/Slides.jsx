import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default function Slides() {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <div className="my-5">
      <Swiper
        navigation={true}
        breakpoints={breakpoints}
        className="mySwiper text-white h-80"
      >
        <SwiperSlide>
          <div
            className="h-full w-full bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(/delivry.avif)` }}
          >
            <h1 className="text-2xl">Express Delivery</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          {" "}
          <div
            className="h-full w-full bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(/delivry.avif)` }}
          >
            <h1 className="text-2xl">Express Delivery</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          {" "}
          <div
            className="h-full w-full bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(/delivry.avif)` }}
          >
            <h1 className="text-2xl">Express Delivery</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          {" "}
          <div
            className="h-full w-full bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(/delivry.avif)` }}
          >
            <h1 className="text-2xl">Express Delivery</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
