import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/testimonialstyle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Testimonials } from "../constants/linkslist";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function TestimonialsSwiper() {
  const splitCategories = (categories, groupSize) => {
    const result = [];
    for (let i = 0; i < categories.length; i += groupSize) {
      result.push(categories.slice(i, i + groupSize));
    }
    return result;
  };
  const categoryGroups = splitCategories(Testimonials, 2);

  const swiperRef = useRef(null);

  const scrollToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const scrollToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        ref={swiperRef}
      >
        {categoryGroups.map((group, groupIndex) => (
          <SwiperSlide
            key={groupIndex}
            className={
              " bg-white py-10 pb-10 px-5 flex gap-10 flex-row justify-around "
            }
          >
            {group.map((item, index) => (
              <div key={index} className={"flex flex-row gap-10 w-[fit]"}>
                <div className={"w-[200px] h-[300px]"}>
                  <img src={item.image} className={"w-full h-full object-contain"} />
                </div>
                <div
                  className={
                    "flex flex-col text-md gap-2 w-[200px] font-ubuntu"
                  }
                >
                  <div className={"mx-auto text-6xl text-slate-400"}>
                    <RiDoubleQuotesL className={"text-center"} />
                  </div>
                  <div>{item.description}</div>
                  <div className={"font-roboto font-extrabold"}>{item.name}</div>
                  <div className={"flex flex-row text-sm gap-2 font-bold text-blue-700"}>
                    <p>{item.job}</p>
                    <div className={"w-[50px] my-auto h-[2px] bg-slate-400"}></div>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={"text-center"}>
        <button onClick={scrollToPrevSlide} className={"bg-blue-800 p-2 hover:opacity-90 rounded-full text-white mr-3"}>
          <GrPrevious className={"text-2xl"} />
        </button>
        <button onClick={scrollToNextSlide} className={"bg-blue-800 p-2 hover:opacity-90  rounded-full text-white mr-3"}>
          <GrNext className={"text-2xl"} />
        </button>
      </div>
    </>
  );
}
