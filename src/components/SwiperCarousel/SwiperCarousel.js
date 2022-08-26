import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperCarousel.css";
import { Pagination , Navigation, Autoplay} from "swiper";
import ShapeOne from "../ShapeOne/ShapeOne";
import ShapeTwo from "../ShapeTwo/ShapeTwo";

export default function SwiperCarousel({
  children,
  items,
  navigation,
  loop,
  clickable,
  slidesPerView,
  spaceBetween
}) {
  let clone = items.map(el=>(
      <SwiperSlide>
        {React.cloneElement(children, {item:el, key:el.id})}
      </SwiperSlide>
    ));
  console.log(clone);
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween !== undefined ? spaceBetween :30}
        navigation={navigation !== undefined? navigation : true}
        loop={loop !== undefined ? loop : true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: clickable !== undefined ? clickable: true
        }}
        modules={[Pagination,Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={slidesPerView ? slidesPerView : 1}
      >
        {clone}
      </Swiper>
    </>
  );
}
