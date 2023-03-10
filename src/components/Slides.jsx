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
        className="mySwiper h-64 "
      >
        <SwiperSlide>
          <Div imgPath={"free.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Div imgPath={"cash.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Div imgPath={"express.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Div imgPath={"voucher.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Div imgPath={"coupon.webp"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const Div = ({ imgPath }) => {
  return (
    <div
      className="h-full rounded-xl w-full bg-black bg-cover text-white"
      style={{
        backgroundImage: `url(/${imgPath})`,
      }}
    ></div>
  );
};
